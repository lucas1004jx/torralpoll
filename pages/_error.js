import React from 'react';
import { Layout } from '../components/common';

const Error = ({ statusCode }) => {
  return (
    <Layout>
      <div>{`Error ${statusCode}`}</div>
    </Layout>
    
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};

export default Error;
