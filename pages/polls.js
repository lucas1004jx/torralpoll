import React, { Component } from 'react';
import axios from 'axios';
import { server } from '../config';
import { PollsPage } from '../components/pageComponents';

class Polls extends Component {

  static async getInitialProps({ query }) {
    let id, poll = {}, polls = [];
    if (query.id) {
      id = query.id;
      poll = await axios.get(`${server}/${id}/details`)
        .then(res => res.data)
        .catch(() => console.error('failed to fetch poll detail data'));

      return { poll };
    } else {
      polls = await axios.get(`${server}/list`)
        .then(res => res.data)
        .catch(() => console.error('failed to fetch poll list data'));

      return { polls };
    }

  }
  render() {
    return <PollsPage {...this.props} />;
  }

}

export default Polls;