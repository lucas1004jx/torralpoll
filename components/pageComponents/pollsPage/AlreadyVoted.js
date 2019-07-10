import React from 'react';
import { Layout, InfoCard } from '../../common';

const AlreadyVoted = (props) =>{
  const { id } = props;
  return(
    <Layout>
      <div className="page-inner">
        <InfoCard 
          img='/static/svg/already_vote.svg'
          message='You have already voted'
          btn1='see your option'
          href1={`/option?id=${id}`}
          btn2='back to list'
          href2='/polls'
        />
      </div>
      <style jsx>{`
      .page-inner{
          display:flex;
          align-items:center;
          height:calc(100vh - 180px);
      }
      `}
      </style>
    </Layout>
  );
};

export default AlreadyVoted;