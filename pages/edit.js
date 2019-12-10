import React from 'react';
import axios from 'axios';
import nookies from 'nookies';
import { api } from '../config';
import { EditPage } from '../components/pageComponents';
import Error from './_error';

const Edit = (props) => {
  const { error } = props;
  if (error) return <Error statusCode={error} />;
  return <EditPage {...props} />;
};

Edit.getInitialProps = async (ctx) => {
  let { query: { id } } = ctx;
  const { token = '' } = nookies.get(ctx);
  if(!id)  return { error: 404 };
  try {
    const poll = await axios.get(api.result(id), { headers: { Authorization: token } });
    const data = poll.data;
    return data;
  } catch (error) {
    const statusCode = error.response && error.response.status || 401;
    console.log('edit page error', statusCode);
    return {
      error: statusCode,
      errorMessage: error.message
    };
  }


};

export default Edit;
