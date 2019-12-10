import React from 'react';
import PollDetail from './PollDetail';
import PollLists from './PollLists';
import AlreadyVoted from './AlreadyVoted';

const PollsPage = (props) => {
  const { poll, polls, query } = props;
  if (poll) {
    if(poll.votedOption) return <AlreadyVoted id={query.id} /> ;
    return <PollDetail {...poll} />;
  } else if (polls) {
    return <PollLists {...polls} />;
  }


};

export default PollsPage;
