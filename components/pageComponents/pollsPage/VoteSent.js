import React from 'react';
import { InfoPage } from '../index';

const VoteSent = (props) =>{
  const { id } = props;
  return (
    <InfoPage 
      pageTitle='Thanks for your vote'
      img='/static/svg/thanks.svg'
      message='Thanks for your vote!'
      btn1='back to list'
      href1='/polls'
      btn2='see your option'
      href2={`/option?id=${id}`}
    />
   
  );
};

export default VoteSent;