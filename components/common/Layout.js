import React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import classnames from 'classnames';
import { Nav } from './index';

Router.onRouteChangeStart = () => NProgress.start();

Router.onRouteChangeComplete = () => NProgress.done();

Router.onChangeError = () => NProgress.done();


const Layout = ({ title, children, author, className, hideHeader, pageTitle = 'TorralPoll', preview }) => {
  const seoTitle = `TorralPoll || ${pageTitle}`;
  const seoDescription = 'See the poll list';
  return (
    <main className={classnames({
      [className]: true,
      'preview': preview
    })}
    >
      <Head>
        <title>{seoTitle}</title>
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
      </Head>
      {!preview && <Nav />}
      {!hideHeader && (
        <div className='title'>
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
        .preview{
          min-height:auto;
          width:95%;
          height:calc(100vh - 80px);
          box-shadow:2px 2px 10px var(--color-shadow);
          background:#fff;
        }
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
