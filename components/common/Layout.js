import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import{ Nav } from './index';

Router.onRouteChangeStart = () => NProgress.start();

Router.onRouteChangeComplete = () => NProgress.done();

Router.onChangeError = () => NProgress.done();

const Layout = ({ title, children, classnames, author, hideHeader, pageTitle='TorralPoll' }) =>(
  <main className={classnames}>
    <Head>
      <title>{pageTitle}</title>
    </Head>
    <Nav />
    {!hideHeader && (
      <div className="title">
        <h1>{title}</h1>
        {author && (
          <span className="author">
            {author}
          </span>
        )}
      </div>
    )}
    
    {children}
    <style jsx global>
      {`
            :root{
                --main-color: #17AD8D;
                --inActive-color:#979797;
                --dark-color:#263C47;
                --tag-all:#FAC314;
                --tag-active:#079AE0;
                --tag-closed:#B85346;
                --main-font:'Lato', sans-serif;
            }
            body{
                font-family:var(--main-font);
                padding: 0;
                margin:0;
                box-sizing:border-box;
                width:100%;
                position:relative;
                color:var(--dark-color);
            }
            main{
                max-width:800px;
                margin:0 auto;
                box-sizing:border-box;
                padding: 60px 30px;
                padding-bottom:50px;
            }
            .title{
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
                margin-bottom:10px;
                margin-left:20px;
            }
        
            `}
    </style>
  </main>
);

export default Layout;