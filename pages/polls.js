import React, { Component } from 'react';
import axios from 'axios';
import { PollsPage } from '../components/page';

class Polls extends Component {

  static async getInitialProps({ query }) {
    let id, poll = {}, polls = [];

    if (query.id) {
      id = query.id;
      poll = await axios.get(`https://torralbot-back.herokuapp.com/${id}/details`)
        .then(res => res.data)
        .catch(() => console.error('failed to fetch poll detail data'));

      return { poll };
    } else {
      polls = await axios.get('https://torralbot-back.herokuapp.com/list')
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