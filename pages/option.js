import React, { Component } from 'react';
import axios from 'axios';
import nookies from 'nookies';
import { api } from '../config';

import { OptionPage } from '../components/pageComponents';

class Option extends Component {
  static async getInitialProps(ctx) {
    const { query } = ctx;
    const { token='' }  = nookies.get(ctx);
    let { data: poll } = await axios({
      method: 'get',
      url: api.userOption(query.id),
      headers: { Authorization: token }
    });
    
    return { ...poll };
  }

  render() {
    return <OptionPage {...this.props} />;
  }
}

export default Option;