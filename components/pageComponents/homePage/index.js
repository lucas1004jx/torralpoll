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
      <div className="title">
        <h1>torralpoll!</h1>
      </div>
      <figure>
        <img src="/static/svg/team.svg" alt="team" />
      </figure>
      <div className="intro-section">
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
        <Link prefetch href="/createpoll">
          <a className="btn">
            <Button name="create a poll" style={btnStyle} />
          </a>
        </Link>
        <Link prefetch href="/polls">
          <a className="btn">
            <Button name="see polls" style={btnStyle} />
          </a>
        </Link>

      </div>

      <style jsx global>
        {`
        body{
          background:var(--light-blue);
        }
        .home-page{
            background:var(--light-blue);
            margin:0;
            padding:48px 25px 0 25px;
            width:100vw;
            height:100vh;
            max-width:none;
            min-height: 773px;
            display:grid;
            grid-template-columns:repeat(3, 1fr);
            grid-template-rows:250px 1fr;
            grid-column-gap:15px;
            grid-row-gap:25px;
            max-width:1200px;
            margin:0 auto;
        }
        figure{
            width:100%;
            margin:0;
            grid-column: span 2 / -1;
            grid-row:1/3;
        }
        img{
            width:100%;
            height:100%;
            object-fit:contain;
            object-position:bottom;
        }
        .intro-section{
            max-width:500px;
            margin:0 auto;
            color:#fff;
            font-size:15px;
            line-height:1.5;
            overflow:hidden;
            grid-column:1/3;
            grid-row:2/3;
            height:fit-content;
            align-self:center;
        }
        .title{
            color:#fff;
            grid-column:1/2;
            grid-row:1/2;
            display: flex;
            align-items: center;
        }
        h1{
          margin:0;
          font-size:60px;
          transform:rotate(-30deg);
          
        }
        
        h1:after{
            content:'';
            display:block;
            width:100%;
            height:10px;
            background:var(--main-color);
        }
        .intro{
            animation: slideUp 3s 1 forwards;
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
          h1{
            transform:rotate(0deg);
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
          .intro-section{
            grid-column:1/3;
          }
        }
        `}

      </style>
      
    </Layout>
  );
};
export default HomePage;