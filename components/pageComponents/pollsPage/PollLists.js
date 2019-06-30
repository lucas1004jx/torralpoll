import React, { useState } from 'react';
import Link from 'next/link';
import { Layout, List, Button, Tag } from '../../common';

const PollLists = (props) => {
  const [status, setStatus] = useState('all');

  let { polls } = props;
  polls = polls.reverse();
  
  const Tags = ['all', 'active', 'closed'];
  const activePolls = polls.filter(poll => poll.active);
  const closedPolls = polls.filter(poll => !poll.active);

  const handleFilter = (status) => {
    setStatus(status);
  };

  return (
    <Layout title='Poll list' pageTile='TorralPoll - poll List'>
      <div className="filter">
        {Tags.map(tag =>
          <Tag name={tag} status={tag} onClick={() => handleFilter(tag)} active={tag === status} key={tag} />
        )}

        <Link href="/createpoll">
          <a>
            <Button name='create poll' style={{ 'float': 'right' }} />
          </a>
        </Link>
      </div>
      {status === 'all' && polls.map(poll => (
        <List content={poll.name} status={poll.active ? 'active' : 'closed'} href={poll.active ? `/polls?id=${poll._id}` : `/result?id=${poll._id}`} key={poll._id} />
      ))}
      {status === 'active' && activePolls.map(poll => (
        <List content={poll.name} status={poll.active ? 'active' : 'closed'} href={`/polls?id=${poll._id}`} key={poll._id} />
      ))}
      {status === 'closed' && closedPolls.map(poll => (
        <List content={poll.name} status={poll.active ? 'active' : 'closed'} href={`/result?id=${poll._id}`} key={poll._id} />
      ))}
      <style jsx>
        {`
            .filter{
              margin-bottom:15px;
              border-bottom:2px solid var(--color-inActive);
              padding-bottom:15px;
            }
          `}

      </style>
    </Layout>
  );
};

export default PollLists;