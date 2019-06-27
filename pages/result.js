
import React, { Component } from 'react';
import axios from 'axios';
//import * as d3 from 'd3';
import { ResultPage } from '../components/pageComponents';

class Result extends Component {
  static async getInitialProps({ query }) {
    let { id } = query;
   
    if(id) {
      const poll = await axios.get(`https://torralbot-back.herokuapp.com/${id}/details`)
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
