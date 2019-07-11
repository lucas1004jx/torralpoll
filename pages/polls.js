import React, { Component } from 'react';
import nookies from 'nookies';
import { PollListContext } from '../context';
import { PollsPage } from '../components/pageComponents';
import { crud } from '../lib';
import Error from './_error';

class Polls extends Component {
static contextType = PollListContext;
static async getInitialProps(ctx) {
  const { query } = ctx;
  const { handleResult, handePollList } = crud;
  const { token='' }  = nookies.get(ctx);
  
  if (query.id) {
    const id = query.id;
    const poll = await handleResult(id, token);
    return { poll, query };
  } else {
    const polls = await handePollList(token);
    return { polls };
  }

}
render() {
  const { poll={}, polls={}, query={} } = this.props;
  const { setPollList } = this.context;
  setPollList(polls.polls);
  
  if (poll.error)  return <Error statusCode={poll.error} query={query} />;
  if (polls.error)  return <Error statusCode={polls.error} />;
  return <PollsPage {...this.props}  />;
}

} 

export default Polls;