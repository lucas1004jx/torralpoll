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
     
      <style jsx>
        {`
        .title{
              font-family: var(--font-header);
              display:flex;
              margin:20px 0;
              position:relative;
          }

          
        .error-page{
          display:flex;
          justify-content:center;
          align-items:center;
        }
        .poll-list-page .title{
          color:var(--color-link);
        }
      `}
      </style>
    </main>
  );
};

export default Layout;