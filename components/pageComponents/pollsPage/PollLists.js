import React, { useState, useEffect } from 'react';
import { Layout, Tag, Card } from '../../common';

const PollLists = (props) => {
  const { polls=[] } = props;
  const dateToInteger = (date) => new Date(date).getTime();

  const sortedPolls = polls.sort(({ timestampCreation: date1 }, { timestampCreation: date2 }) =>
    dateToInteger(date2) - dateToInteger(date1)
  );
  const [status, setStatus] = useState('all');
  const [pollObj, setPollObj] = useState({
    'all': [],
    'active': [],
    'closed': []
  });
  const Tags = ['all', 'active', 'closed'];

  useEffect(()=>{
    const activePolls = sortedPolls.filter(poll => poll.active);
    const closedPolls = sortedPolls.filter(poll => !poll.active);
    setPollObj({
      'all': sortedPolls,
      'active': activePolls,
      'closed': closedPolls
    });

  }, [props]);


  const handleFilter = (status) => {
    setStatus(status);
  };


  const renderPollCard = (status) => (
    pollObj[status].map(poll => (
      <Card {...poll} key={poll.id} />
    ))
  );

  return (
    <Layout
      title="Poll List"
      pageTitle='Poll List'
      className="poll-list-page"
    >
      <div className="filter">
        {Tags.map(tag =>
          <Tag name={tag} status={tag} onClick={() => handleFilter(tag)} active={tag === status} key={tag} style={{ width: '86px' }} />
        )}
      </div>

      <div className="cards">
        {renderPollCard(status)}
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
            .cards{
              display:grid;
              grid-template-columns:repeat(auto-fill, minmax(300px, 1fr));
              grid-column-gap:25px;
              grid-row-gap:25px;
            }
          `}

      </style>
    </Layout>
  );
};

export default PollLists;
