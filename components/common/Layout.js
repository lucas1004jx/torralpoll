import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import { Nav } from './index';

Router.onRouteChangeStart = () => NProgress.start();

Router.onRouteChangeComplete = () => NProgress.done();

Router.onChangeError = () => NProgress.done();



const Layout = ({ title, children, author, className, hideHeader, pageTitle = 'TorralPoll' }) => {
  
  return (
    <main className={className}>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Nav />
      {!hideHeader && (
        <div className="title">
          <h1>{title}</h1>
          {author && (
            <span className="author">
            @{author}
            </span>
          )}
        </div>
      )}

      {children}
      <style jsx global>
        {`
            :root{
                --color-main: #17AD8D;
                --color-background:#5F9EA0;
                --color-inActive:#979797;
                --color-dark:#263C47;
                --color-text:#4a4a4a;
                --tag-all:#FAC314;
                --tag-active:#079AE0;
                --tag-closed:#B85346;
                --font-main:'Lato', sans-serif;
                --font-header: 'Chalkduster', 'Lato', sans-serif;
            }
            @font-face {
              font-family: Chalkduster;
              src: url('/static/fonts/Chalkduster.woff2');
            }
            body{
                font-family:var(--font-main);
                padding: 0;
                margin:0;
                box-sizing:border-box;
                width:100%;
                position:relative;
                color:var(--color-dark);
            }
            main{
                max-width:1400px;
                min-height:100vh;
                margin:0 auto;
                box-sizing:border-box;
                padding: 60px 30px;
                padding-bottom:50px;
            }
            .title{
                font-family: var(--font-header);
                display:flex;
                margin:20px 0;
            }

            h1{
                text-transform:uppercase;
                font-size:60px;
                margin:0;
            }
            .author{
                align-self:flex-end;
                margin-left:15px;
                font-size:14px;
            }
           
            
          .question-page h1{
            font-size:48px;
          }

          
          
            `}
      </style>
      <style jsx>
        {`
        .error-page{
          display:flex;
          justify-content:center;
          align-items:center;
          flex-direction:column;
        }
      `}
      </style>
    </main>
  );
};

export default Layout;