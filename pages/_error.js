import React from 'react';
import { Layout } from '../components/common';

const Error = ({ statusCode = '', message }) => {
  return (
    <Layout>
      <div>{`Error ${statusCode} ${message}`}</div>
    </Layout>
    
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};

export default Error;
