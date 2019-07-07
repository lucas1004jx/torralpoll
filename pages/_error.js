import React from 'react';
import { Layout } from '../components/common';

const Error = ({ statusCode = '', message='' }) => {
  const images = {
    '404': '/static/svg/404.svg',
    '401': '/static/svg/401.svg' 
  };
  const messages = {
    '404': 'NOT FOUND',
    '401': 'NOT AUTHORIZED'
  };
  return (
    <Layout className="error-page" pageTitle={`${statusCode} ERROR`} hideHeader>
      <figure>
        <img src={images[statusCode]} alt={statusCode} />
      </figure>
      <div className="text">{message || messages[statusCode]} </div> 
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
