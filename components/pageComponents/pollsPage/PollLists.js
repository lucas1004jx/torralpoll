import React, { useState, useEffect } from 'react';
import { Layout, List, Tag } from '../../common';

const PollLists = (props) => {
  const { polls=[] } = props;
  const [status, setStatus] = useState('all');
  const [pollObj, setPollObj] = useState({
    'all': [],
    'active': [],
    'closed': []
  });
  const Tags = ['all', 'active', 'closed'];

  useEffect(()=>{
    const activePolls = polls.filter(poll => poll.active);
    const closedPolls = polls.filter(poll => !poll.active);
    setPollObj({
      'all': polls.reverse(),
      'active': activePolls,
      'closed': closedPolls
    });
  
  }, [props]);
  

  const handleFilter = (status) => {
    setStatus(status);
  };
  
  const renderPollList = (status) =>(
    pollObj[status].map(poll => (
      poll.userHasVoted ?
        <List content={poll.name} id={poll.id} status={poll.active ? 'active' : 'closed'} href={poll.active ? `/option?id=${poll.id}` : `/result?id=${poll.id}`} key={poll.id} voted={poll.userHasVoted} />:
        <List content={poll.name} id={poll.id} status={poll.active ? 'active' : 'closed'} href={poll.active ? `/polls?id=${poll.id}` : `/result?id=${poll.id}`} key={poll.id} voted={poll.userHasVoted} />
    ))
   
  );

  return (
    <Layout title='Poll list' pageTile='TorralPoll - poll List'>
      <div className="filter">
        {Tags.map(tag =>
          <Tag name={tag} status={tag} onClick={() => handleFilter(tag)} active={tag === status} key={tag} style={{ width: '86px' }} />
        )}
      </div>
      <div className="lists">
        {renderPollList(status)}
      </div>
      
      <style jsx>
        {`
            .filter{
              margin-bottom:15px;
              border-bottom:2px solid var(--color-inActive);
              padding-bottom:15px;
            }
            .lists{
              padding-right: 50px;
            }
          `}

      </style>
    </Layout>
  );
};

export default PollLists;