
import React, { Component } from 'react';
import axios from 'axios';
import nookies from 'nookies';
import { ResultPage } from '../components/pageComponents';

class Result extends Component {
  static async getInitialProps(ctx) {
    let { query: { id } } = ctx;
    const { token }  = nookies.get(ctx);
    if(id) {
      const poll = await axios.get(`https://torralbot-back.herokuapp.com/${id}/details`, { headers: { Authorization: token } })
        .then(res =>  res.data)
        .catch(() => console.error('failed to fetch poll detail data'));

      return { ...poll };
    }
    return {};
  }
  render() {
    return (
      <ResultPage {...this.props} />
    );
  }

}



export default Result;
