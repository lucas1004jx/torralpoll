import React from 'react';
import Link from 'next/link';
import { Layout, Button } from '../components/common';

const Error = ({ statusCode = '', message='', query={} }) => {
  const images = {
    '404': '/static/svg/404.svg',
    '401': '/static/svg/401.svg', 
    '500': '/static/svg/already_vote.svg'
  };
  const messages = {
    '404': 'NOT FOUND',
    '401': 'NOT AUTHORIZED',
    '500': 'YOU HAVE ALREADY VOTED'
  };
  return (
    <Layout className="error-page" pageTitle={`${statusCode} ERROR`} hideHeader>
      <figure>
        <img src={images[statusCode]} alt={statusCode} />
      </figure>
      <div className="text">{message || messages[statusCode]} </div>
      {statusCode === 404 && (
        <div className="button">
          <Link href='/'>
            <a>
              <Button name="Home" />
            </a>
          </Link>
        </div>
      )}
      {statusCode === 500 && (
        <div className="button">
          <Link href={`option?id=${query.id}`}>
            <a>
              <Button name="see your option" />
            </a>
          </Link>
          <Link href="/polls">
            <a>
              <Button name="Back to list" />
            </a>
          </Link>
        </div>
      )}
     
      
      <style>
        {`
        
        figure{
          margin:0;
          padding:0;
          width:80%;
          text-align:center;
        }
        img{
          width:100%;
          max-width:800px;
          height:100%;
          object-fit:contain;
          object-position:center;
        }
        .text{
          font-size:38px;
          font-family:var(--font-header);
          margin-top:25px;
        }
        .button{
          margin-top:25px;
        }
      `}
      </style>
    </Layout>
    
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};

export default Error;
