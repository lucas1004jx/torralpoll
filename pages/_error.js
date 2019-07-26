import React from 'react';
import Link from 'next/link';
import { Layout, Button } from '../components/common';

const Error = ({ statusCode = '', message='', }) => {
  const images = {
    '404': '/static/images/404.svg',
    '401': '/static/images/401.svg', 
    '500': '/static/images/server_error.svg'
  };
  const messages = {
    '404': 'NOT FOUND',
    '401': 'NOT AUTHORIZED',
    '500': 'SERVER ERROR'
  };
  
  return (
    <Layout className="error-page" pageTitle={`${statusCode} ERROR`} hideHeader>
      <div className={`page-inner error-${statusCode}`}>  
        <figure>
          <img src={images[statusCode]} alt={statusCode} />
        </figure>
        <div className="info">
          <div className="text">{message || messages[statusCode]} </div>
          
          <div className="button">
            { statusCode === 401 && (
              <Link href='/login'>
                <a>
                  <Button name="Sign In" margin="25" />
                </a>
              </Link>
            )}
            <Link href='/'>
              <a>
                <Button name="Home" />
              </a>
            </Link>
            
          </div>
        </div>
      </div>
     
      
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
