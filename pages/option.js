import React, { Component } from 'react';
import axios from 'axios';
import nookies from 'nookies';
import { api } from '../config';

import { OptionPage } from '../components/pageComponents';
import  Error from './_error';

class Option extends Component {
  static async getInitialProps(ctx) {
    const { query } = ctx;
    const { token='' }  = nookies.get(ctx);
    let poll = await axios({
      method: 'get',
      url: api.userOption(query.id),
      headers: { Authorization: token }
    }).then(res => res.data)
      .catch(error => {
        console.log('errir', error.response.status);
        const statusCode = error.response && error.response.status || 401;
        return { 
          error: statusCode,
          errorMessage: error.message
        };
      });
    
    return { ...poll };
  }

  render() {
    if (this.props.error)  return <Error statusCode={this.props.error} />;
    return <OptionPage {...this.props} />;
  }
}

export default Option;