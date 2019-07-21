import React from 'react';
import Link from 'next/link';
import { Layout, Button, Icons } from '../../common';

const HomePage = () => {

  return (
    <Layout className='home-page' pageTitle='TorralPoll-Home' title="TorralPoll!" hideHeader>
      <div className="home-page-inner">
        <div className="intro-section">
          <h1 className="title">TorralPoll</h1>
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
              <Button name="see polls"  />
            </a>
          </Link>
         
        </div>
        <div className="graphic">
          <Icons name='bcgHome' width='100%' height='auto' />
        </div>
      </div>
      <style jsx global>
        {`
        body{
          
        }
      `}
      </style>
      <style jsx>
        {`
        .home-page-inner{
            margin:0;
            display:grid;
            grid-template-columns:50% 50%;
            grid-template-rows:65px min-content;
            grid-column-gap:25px;
            grid-template-areas:'. .' 'intro graphic';
            margin:0 auto;
            color:var(--color-text);
        }
        .intro-section{
            max-width:600px;
            font-size:15px;
            line-height:1.5;
            overflow:hidden;
            grid-area:intro;
            height:fit-content;
            color:var(--color-text);
            padding: 15px;
        }
        
        .intro{
            animation: slideUp 3s 1 forwards;
            margin-bottom:25px;
          }
        .title{
          position:relative;
          font-family:var(--font-fantasy);
          font-size:48px;
          margin-bottom:50px;
        }
        .title:after{
            content:'';
            display:block;
            width:250px;
            height:4px;
            background:var(--color-main);
            position:absolute;
            bottom:-20px;
            left:75px;
        }

        .btn{
            animation: show 1s 2s 1 forwards;
            opacity:0; 
        }

        .graphic{
          grid-area:graphic;
          position:absolute;
          top:0;
          right:0;
          width:60%;
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