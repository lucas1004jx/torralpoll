import React from 'react';
import Link from 'next/link';
import { Layout, Button } from '../../common';

const HomePage = () => {

  const btnStyle = {
    background: '#fff',
    color: '#17AD8D',
    fontWeight: '500',
    fontSize: '16px'
  };
  return (
    <Layout classnames='home-page' hideHeader pageTitle='TorralPoll-Home'>
      <div className="home-page-inner">
        <div className="intro-section">
          <div className="title">
            <h1>TorralPoll!</h1>
          </div>
          <div className="intro">
            <p>
              Once upon a time (like until now), there was a group of people, working together in a splendid company.
            </p>
            <p>From time to time (every friday) they enjoy going out for lunch in one among the most fancy (maybe not ) restaurants around their workplace.</p>
            <p>They are supposed to choose the restaurant in a democratic and civilized way but since the first introduction of the current  voting system a lot of doubts have arisen, a lot of rumors surround the system and its keeper and maintainer regarding the lawfulness of their methods. </p>
            <p>
              The growing discontent among the people of the company led to the birth of the tool we are going to unveil today in order to end the era of oppression and tyranny of the old voting system.
            </p>
          </div>
          <Link prefetch href="/polls">
            <a className="btn">
              <Button name="see polls" style={btnStyle} />
            </a>
          </Link>

        </div>
      </div>
      <style jsx global>
        {`
        body{
          background:var(--color-background);
        }
      `}
      </style>
      <style jsx>
        {`
        .home-page-inner{
            margin:0;
            min-height:calc(100vh - 120px);
            display:grid;
            grid-template-columns:1fr;
            grid-template-rows:1fr auto 1fr;
            margin:0 auto;
            background:url('/static/svg/team.svg') no-repeat right bottom;
            background-size: 70% auto;
        }
        .intro-section{
            max-width:600px;
            font-size:18px;
            line-height:1.5;
            overflow:hidden;
            grid-column:1/2;
            grid-row:2/3;
            height:fit-content;
            color:var(--color-text);
            padding: 15px 0;
        }
        .title{
            color:#fff;
            margin-bottom:50px;
        }
        h1{
          margin:0;
          font-size:70px;
          text-transform:none;
        }
        
        h1:after{
            content:'';
            display:block;
            width:100%;
            height:10px;
            background:var(--color-main);
        }
        .intro{
            animation: slideUp 3s 1 forwards;
            margin-bottom:25px;
          }
        .btn{
            animation: show 1s 2s 1 forwards;
            opacity:0; 
        }
        @keyframes slideUp{
            from{transform:translateY(100%)}
            to{transform:translateY(0)}
        }
        @keyframes show{
            from{opacity:0}
            to{opacity:1}
        }

        @media(max-width:999px){
          .home-page{
            grid-template-columns:1fr 280px;
          }
          .title{
            align-items: flex-end;
          }
          .intro-section{
            margin:0;
          }
        }
        @media(max-width:768px){
          .home-page{
            grid-template-columns:1fr;
            grid-template-rows:150px min-content;
            min-height:auto;
          }
          figure{
            display:none;
          }
          
        }
        `}

      </style>

    </Layout>
  );
};
export default HomePage;