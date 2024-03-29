
import React, { Component } from 'react';
import axios from 'axios';
import nookies from 'nookies';
import { api } from '../config';
import { ResultPage } from '../components/pageComponents';
import Error from './_error';

class Result extends Component {
  static async getInitialProps(ctx) {
    let { query: { id } } = ctx;
    const { token='' }  = nookies.get(ctx);
    if(id) {
      const poll = await axios.get(api.result(id), { headers: { Authorization: token } })
        .then(res =>  {
          //console.log('resutt data-----', res.data);
          return res.data;
        })
        .catch(error => {
          const statusCode = error.response && error.response.status || 401;
          console.log('result page error', statusCode);
          return {
            error: statusCode,
            errorMessage: error.message
          };
        });

      return { ...poll };
    }
    return { error: 404 };
  }
  render() {
    const { error } = this.props;
    if(error) return <Error statusCode={error} />;
    return (
      <ResultPage {...this.props} />
    );
  }

}



export default Result;
