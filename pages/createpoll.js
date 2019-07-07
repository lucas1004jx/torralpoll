import React, { useContext } from 'react';
import { CreatePollPage }  from '../components/pageComponents';
import { LoginContext } from '../context';
import Error from './_error';

const CreatePoll = () => {
  const { userProfile, error } = useContext(LoginContext);
  const { rol } = userProfile;
  if(error) return <Error statusCode={error} />;
  if(rol !== 'Admin') return <Error statusCode={401} />;
  return <CreatePollPage />;
 
};


export default CreatePoll;