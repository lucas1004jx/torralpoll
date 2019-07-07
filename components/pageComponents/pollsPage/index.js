import React from 'react';
import PollDetail from './PollDetail';
import PollLists from './PollLists';

const PollsPage = (props) => {
  const { poll, polls } = props;
  if (poll) {
    return <PollDetail {...poll} />;
  } else if (polls) {
    return <PollLists {...polls} />;
  }


};

export default PollsPage;