import React, { useState, useContext } from 'react';
import Link from 'next/link';
import axios from 'axios';
import nookies from 'nookies';
import { api } from '../../../config';
import { Layout, Button, Checkbox } from '../../common';
import { LoginContext } from '../../../context';

const PollDetail = (props) => {
  const { userProfile: { email } } = useContext(LoginContext);
  console.log('props', props);
  const { _id: id, options, name, active, description } = props;
  
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
      <Layout title="question" className="question-page" hideHeader pageTitle='TorralPoll-Question'>
        <div className="page-inner">
          <figure>
            <img src="/static/svg/thanks.svg" alt="thanks" />
          </figure>
          <h3 className="text">Thanks for your vote! It was received and securely stored.
            <br />It cannot be changed by ANYONE
          </h3>
          
          <div className="button">
            <Link href="/polls">
              <a>
                <Button name='back to list' />
              </a>
            </Link>
          </div>
          
        </div>
        <style jsx>
          {`
          .page-inner{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top:50px;
          }
          figure{
            margin:0;
            padding:0;
            width:80%;
            text-align:center;
          }
          img{
            width:100%;
            max-width:800px;
            height:100%;
            object-fit:contain;
            object-position:center;
          }
          .text{
            font-size:18px;
            font-family:var(--font-header);
            margin:0;
            margin-top:25px;
            text-align:center;
          }
          .button{
            margin-top:25px;
          }
        `}
        </style>
      </Layout>
    );
  }
  return (
    <Layout title={name} className="question-page" author='author' pageTitle='TorralPoll-Question'>
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