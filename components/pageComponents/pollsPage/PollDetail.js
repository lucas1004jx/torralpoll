import React, { useState, useContext } from 'react';
import Link from 'next/link';
import axios from 'axios';
import nookies from 'nookies';
import { api } from '../../../config';
import { Layout, Button, Checkbox, InfoCard } from '../../common';
import { LoginContext } from '../../../context';

const PollDetail = (props) => {
  const { userProfile: { email } } = useContext(LoginContext);
  const { _id: id, options, name, active, description, createdBy } = props;
  
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

  if (voteSent) {
    return (
      <Layout title="question" className="poll-detail-page" hideHeader pageTitle='TorralPoll || Thanks for your vote'>
        <div className="page-inner">
          <InfoCard 
            img='/static/svg/thanks.svg'
            message='Thanks for your vote!'
            btn1='back to list'
            href1='/polls'
            btn2='see your option'
            href2={`/option?id=${id}`}
          />
          
        </div>
        <style jsx>
          {`
          .page-inner{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top:50px;
            height:calc(100vh - 180px);
          }
          
        `}
        </style>
      </Layout>
    );
  }
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
          {active ? <Button name='submit' onClick={onSubmit} margin="25" /> : ''}
          <Link href="/polls">
            <a>
              <Button name='back to list' />
            </a>
          </Link>

        </div>
      </div>
      <style jsx>
        {`
            
            .alert {
              padding: 20px;
              background-color: #f44336; /* Red */
              color: white;
              text-align:center;
              margin-bottom: 15px;
            }
            .success {
                padding: 20px;
                background-color: green; /* Red */
                color: white;
                text-align:center;
                margin-bottom: 15px;
            }
            .selected {
                color: var(--color-dark)
            }
            
          /* The close button */
          .closebtn {
            margin-left: 15px;
            color: white;
            font-weight: bold;
            float: right;
            font-size: 22px;
            line-height: 20px;
            cursor: pointer;
            transition: 0.3s;
          }
            
          /* When moving the mouse over the close button */
          .closebtn:hover {
            color: black;
          }
          .voteAs {
              margin-right: 20px;
          }
          .nameInput {
              margin-right: 20px;
              border-style: solid;
              border-color: grey;
              border-radius: 5px;
              padding: 10px;
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