import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../../lib';

const LoginContext = createContext();
const LoginContextProvider = ({ children, token }) => {
  
  const [loginState, setLoginState] = useState(false);
  const [userProfile, setUserProfile] = useState({});
  
  const setProfile = (profile) => {
    setUserProfile(profile);
  };
  const handleLoginState= (state) => {
    setLoginState(state);

  };
 

 
  useEffect(()=>{
    //console.log('use effect---------->', token);
    if(token) {
      auth(token).then(({ isLogin, profile })=>{
      //console.log('context set state', isLogin);
        handleLoginState(isLogin);
        setProfile(profile);
      }).catch(error => console.log('auth error', error));
    }
    
  }, [loginState, token]);
  
  return (
    <LoginContext.Provider value={{ loginState, handleLoginState, userProfile, setProfile }}>
      {children}
    </LoginContext.Provider>
  );
};
export { LoginContext, LoginContextProvider };