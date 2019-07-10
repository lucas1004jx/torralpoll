import React from 'react';
import { InfoPage } from '../index';

const AlreadyVoted = (props) =>{
  const { id } = props;
  return(
    <InfoPage 
      pageTitle='FORBBIDEN'
      img='/static/svg/already_vote.svg'
      message='You have already voted'
      btn1='see your option'
      href1={`/option?id=${id}`}
      btn2='back to list'
      href2='/polls'
    />
   
  );
};

export default AlreadyVoted;