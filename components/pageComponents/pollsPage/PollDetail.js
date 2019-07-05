import React, { useState, useContext } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { getToken } from '../../../lib';
import { Layout, Button, Checkbox } from '../../common';
import { LoginContext } from '../../context';

const PollDetail = (props) => {
  const { profile: { email } } = useContext(LoginContext);
  const { options, name, active, description } = props.poll;
  const { query: { id } } = props.url;
  
  const [ voteSent, setVoteSent ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState('');
  
  const [selectedOption, setSelectedOption] = useState('');

  const onSubmit = () => {
    
    const token  = getToken();
    
    if (!selectedOption) {
      alert('You should choose at least one option');
      return;
    }
    
    axios({
      method: 'post',
      url: `https://torralbot-back.herokuapp.com/${id}/vote`,
      params: {
        user: email,
        option: selectedOption
      },
      headers: { Authorization: token }
    })
      .then(response => {
        if (response.data && response.data.res && response.data.res.indexOf('Error') !== -1) {
          setErrorMessage('You have already voted');
        } else {
          setVoteSent(true);
        }
      })
      .catch(err => console.log('error', err));
  };
  
  const onSelect = (value) => {
    console.log('value', value);
    setSelectedOption(value);
  };

  if (voteSent) {
    return (
      <Layout title="question" classnames="question-page" hideHeader pageTitle='TorralPoll-Question'>
        <h3>Thanks for your vote! It was received and securely stored.</h3>
        <h3>
            It cannot be changed by
          {' '}
          <span className="blink">ANYONE</span>
        </h3>
        <Link href="/polls">
          <a>
            <Button name='back to list' />
          </a>
        </Link>
        <Link href={`/result?id=${id}`}>
          <a>
            <Button name='see result' />
          </a>
        </Link>
      </Layout>
    );
  }
  return (
    <Layout title={name} classnames="question-page" author='author' pageTitle='TorralPoll-Question'>
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
        {errorMessage && (
          <div className="alert">
            {errorMessage}
            {'\n'}
            <span className="emoji" role="img">🙅</span>
          </div>
        )}
        <div className="submit-button">
          <span className="voteAs">Vote</span>
         
          {active ? <Button name='submit' onClick={onSubmit} /> : ''}
          <Link href="/polls">
            <a>
              <Button name='back to list' />
            </a>
          </Link>

        </div>
      </div>
      <style jsx>
        {`
            /* The alert message box */
            .emoji {
                font-size: 50px;
            }
            @-webkit-keyframes blinker {
                from {opacity: 1.0;}
                to {opacity: 0.0;}
            }
            .blink{
                text-decoration: blink;
                -webkit-animation-name: blinker;
                -webkit-animation-duration: 0.6s;
                -webkit-animation-iteration-count:infinite;
                -webkit-animation-timing-function:ease-in-out;
                -webkit-animation-direction: alternate;
            }
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