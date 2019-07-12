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
        .error-page{
          display:flex;
          justify-content:center;
          align-items:center;
        }
      `}
      </style>
    </main>
  );
};

export default Layout;