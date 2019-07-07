import React, { createContext, useState, useEffect } from 'react';
import nookies from 'nookies';
import Router from 'next/router';

import { auth } from '../lib';

const LoginContext = createContext();
const LoginContextProvider = ({ children, token }) => {
  
  const [loginState, setLoginState] = useState(false);
  const [userProfile, setUserProfile] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  
  const userLogin = (tokenId, profile) => {
    nookies.set({}, 'token', tokenId);
    sessionStorage.setItem('profile', JSON.stringify(profile));
    Router.push('/polls');
    setLoginState(true);
  };

  const userLogout = () => {
    
    Router.push('/');
    nookies.destroy({}, 'token');
    token='';
    setLoginState(false);
    setUserProfile({});
    console.log('userLogout---login state', loginState);
  };

  useEffect(()=>{
    auth(token).then(({ isLogin, profile={} })=>{
      setLoginState(isLogin);
      setUserProfile(profile);
    }).catch(error => {
      console.log('login context auth error', error.message);
      setError(error.message);
    });

  }, [token]);
  
  const value = {
    loginState,
    userProfile,
    userLogin,
    userLogout,
    error
  };

  return (
    <LoginContext.Provider value={{ ...value }}>
      { children }
    </LoginContext.Provider>
  );
 
    
};
export { LoginContext, LoginContextProvider };