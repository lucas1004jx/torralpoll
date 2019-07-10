import React from 'react';
import Link from 'next/link';
import { Layout, Button, InfoCard } from '../components/common';

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
      {(statusCode === 404 || statusCode === 401) && (
        <div className={`page-inner error-${statusCode}`}>
          
          <figure>
            <img src={images[statusCode]} alt={statusCode} />
          </figure>
          <div className="info">
            <div className="text">{message || messages[statusCode]} </div>
          
            <div className="button">
              <Link href='/'>
                <a>
                  <Button name="Home" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      )}
      {statusCode === 500 && (
        <InfoCard 
          img={images[statusCode]}
          message={messages[statusCode]}
          btn1='see your option'
          href1={`option?id=${query.id}`}
          btn2='back to list'
          href2='/polls'
        />
      )}
      <style jsx>
        {`
        .page-inner{
          display:flex;
          justify-content:center;
          align-items:center;
          flex-direction:column;
        }
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
          text-align:center;

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
