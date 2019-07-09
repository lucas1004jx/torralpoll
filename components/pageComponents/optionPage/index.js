import React from 'react';
import Link from 'next/link';
import { Layout, Checkbox, Button } from '../../common';

const OptionPage = (props) => {
  const { name, description, options, userOption } = props;
  return (
    <Layout title={name} className="question-page" author='author' pageTitle='TorralPoll-Question'>
      <div className="page-inner">
        <p className="description">
          {description}
        </p>

        <div className="left">
          <ul className="lists">
            {options && options.map((option, i) => (
              option.name === userOption ? (
                <Checkbox
                  option={option.name}
                  key={i}
                  disabled
                  checked
                />
              ): (
                <Checkbox
                  option={option.name}
                  key={i}
                  disabled
                />
              )))}
          </ul>
        </div>
        <span className="voteAs">{`Your vote: ${userOption}`} </span>
        <div className="submit-button">
          <Link href="/polls">
            <a>
              <Button name="Back to list" />
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

export default OptionPage;