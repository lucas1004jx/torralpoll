import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../../lib';

const LoginContext = createContext();
const LoginContextProvider = ({ children, token }) => {
  
  
  const [loginModal, setLoginModal] = useState(false);
  const [loginState, setLoginState] = useState(false);
  const [userProfile, setUserProfile] = useState({});
  
  const setProfile = (profile) => {
    setUserProfile(profile);
  };
  const handleLoginState= (state) => {
    setLoginState(state);

  };
 
  const handleLogin = () => {
    setLoginModal(true);
    
  };
  const handleClose = () => {
    setLoginModal(false);
  };
 
  useEffect(()=>{
    //console.log('use effect---------->', token);
    auth(token).then(({ isLogin, profile })=>{
      //console.log('context set state', isLogin);
      handleLoginState(isLogin);
      setProfile(profile);
    });
  }, [loginState, token]);
  
  return (
    <LoginContext.Provider value={{ loginModal, handleLogin, handleClose, loginState, handleLoginState, userProfile, setProfile }}>
      {children}
    </LoginContext.Provider>
  );
};
export { LoginContext, LoginContextProvider };