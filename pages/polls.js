import React, { Component } from 'react';
import axios from 'axios';
import { LoginContext } from '../components/context';
import { getToken } from '../lib';
import { server } from '../config';
import { PollsPage } from '../components/pageComponents';

class Polls extends Component {
static contextType = LoginContext;
static async getInitialProps(ctx) {
  const { query, req } = ctx;
  
  const token  = getToken(req);
  //console.log('polls token----------->', token);
  let id, poll = {}, polls = [];
  if (query.id) {
    id = query.id;
    poll = await axios.get(`${server}/${id}/details`, { headers: { Authorization: token } })
      .then(res => res.data)
      .catch(() => console.error('failed to fetch poll detail data'));

    return { poll };
  } else {
  
    polls = await axios.get(`${server}/list`, { headers: { Authorization: token } })
      .then(res => res.data)
      .catch((error) => console.error(`failed to fetch poll list data ${error}`));
    return { polls };
  }

}
render() {
  return <PollsPage {...this.props}  />;
}

} 

export default Polls;