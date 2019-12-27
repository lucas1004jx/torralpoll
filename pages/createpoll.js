import React, { useContext } from 'react';
import { CreatePollPage }  from '../components/pageComponents';
import { LoginContext } from '../context';
import Error from './_error';

const CreatePoll = () => {
  const { error } = useContext(LoginContext);
  if(error) return <Error statusCode={error} />;
  return <CreatePollPage />;
 
};


export default CreatePoll;