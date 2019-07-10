import React, { useState, useContext } from 'react';
import Link from 'next/link';
import axios from 'axios';
import nookies from 'nookies';
import { api } from '../../../config';
import { Layout, Button, Checkbox } from '../../common';
import { LoginContext } from '../../../context';
import VoteSent from './VoteSent'; 

const PollDetail = (props) => {
  const { userProfile: { email } } = useContext(LoginContext);
  const { _id: id, options, name, description, createdBy } = props;
  
  const [ voteSent, setVoteSent ] = useState(false);
  // eslint-disable-next-line no-unused-vars
  
  const [selectedOption, setSelectedOption] = useState('');

  const onSubmit = () => {
    console.log('submit');
    const { token }  = nookies.get();
    if (!selectedOption) {
      alert('You should choose at least one option');
      return;
    } 

    axios({
      method: 'post',
      url: api.vote(id),
      data: {
        user: email,
        option: selectedOption
      },
      headers: { Authorization: token }
    })
      // eslint-disable-next-line no-unused-vars
      .then(response => {
        console.log('voteeeeeeee');
        setVoteSent(true);
       
      })
      .catch(err => console.log('submit error-------->', err));
  };
  
  const onSelect = (value) => {
    console.log('value', value);
    setSelectedOption(value);
  };

  if (voteSent) return <VoteSent id={id} />;

  return (
    <Layout title={name} className="poll-detail-page" author={createdBy} pageTitle='TorralPoll || Poll Detail'>
      <div className="page-inner">
        <p className="description">
          {description}
        </p>

        <div className="left">
          <ul className="lists">
            {options && options.map((option, i) => (
              <Checkbox
                option={option.name}
                key={i}
                checked={selectedOption === option.name}
                onSelect={() => onSelect(option.name)}
              />
            ))}
          </ul>
        </div>
        <div className="submit-button">
          <Button name='submit' onClick={onSubmit} margin="25" />
          <Link href="/polls">
            <a>
              <Button name='back to list' />
            </a>
          </Link>

        </div>
      </div>
      <style jsx>
        {`
            
            .selected {
                color: var(--color-dark)
            }
            
          ul{
              padding:0;
              margin:0;
              margin-top:30px;
          }
          .submit-button{
              text-align: right;
              margin-top:50px;
          }
          .left{
              width:60%;
          }
          
          .description{
            font-size:18px;
            line-height:1.4;
          }
        `}
      </style>
    </Layout>
  );
};

export default PollDetail;