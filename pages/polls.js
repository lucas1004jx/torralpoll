import React, { Component } from 'react';
import axios from 'axios';
import nookies from 'nookies';
import { LoginContext } from '../components/context';
import { server } from '../config';
import { PollsPage } from '../components/pageComponents';

class Polls extends Component {
static contextType = LoginContext;
static async getInitialProps(ctx) {
  const { query } = ctx;
  
  const { token }  = nookies.get(ctx);
  //console.log('polls token----------->', token);
  let id, poll = {}, polls = [];
  if (query.id) {
    id = query.id;
    poll = await axios({
      method: 'get',
      url: `${server}/${id}/details`,
      headers: { Authorization: token }
    })
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