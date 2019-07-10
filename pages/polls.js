import React, { Component } from 'react';
import axios from 'axios';
import nookies from 'nookies';
import { LoginContext } from '../context';
import { api } from '../config';
import { PollsPage } from '../components/pageComponents';
import Error from './_error';

class Polls extends Component {
static contextType = LoginContext;
static async getInitialProps(ctx) {
  const { query } = ctx;
  
  const { token='' }  = nookies.get(ctx);
  //console.log('polls token----------->', token);
  let id, poll = {}, polls = [];
  
  if (query.id) {
    id = query.id;
    poll = await axios({
      method: 'get',
      url: api.detail(id),
      headers: { Authorization: token }
    })
      .then(res => res.data)
      .catch((error) => {
        console.error('fetch poll detail data error', error.message);
        return {
          error: error.response.status,
          errorMessage: error.message
        };
      });

    return { poll, query };
  } else {
  
    polls = await axios.get(api.list, { headers: { Authorization: token } })
      .then(res =>res.data)
      .catch((error) => {
        console.log('fetch polls list error', error.message); 
        const statusCode = error.response && error.response.status || 401;
        return { 
          error: statusCode,
          errorMessage: error.message
        };  });
    return { polls };
  }

}
render() {
  const { poll={}, polls={}, query={} } = this.props;
  
  if (poll.error)  return <Error statusCode={poll.error} query={query} />;
  if (polls.error)  return <Error statusCode={polls.error} />;
   
  return <PollsPage {...this.props}  />;
}

} 

export default Polls;