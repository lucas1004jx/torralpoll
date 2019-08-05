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
        <title>{`TorralPoll || ${pageTitle}`}</title>
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
          .seo-title{
            text-transform:capitalize;
          }
          
        .error-page{
          display:flex;
          justify-content:center;
          align-items:center;
        }
        .poll-list-page .title{
          color:var(--color-link);
        }
        .poll-detail-page .title{
          color:var(--color-link);
        }
        .result-page .title{
          color:var(--color-warning);
        }
      `}
      </style>
    </main>
  );
};

export default Layout;