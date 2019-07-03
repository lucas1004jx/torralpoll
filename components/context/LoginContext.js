import React, { createContext, useState } from 'react';

const LoginContext = createContext();
const LoginContextProvider = ({ children }) => {
  const [loginModal, setLoginModal] = useState(false);
  const [loginState, setLoginState] = useState(false);
  const [userProfile, setUserProfile] = useState({});

  const getUserProfile = (profile) => {
    setUserProfile(profile);
  };
  const userLogin = () => {
    setLoginState(true);
  };
  const userLogout = () => {
    setLoginState(false);
  };
  const handleLogin = () => {
    setLoginModal(true);
  };
  const handleClose = () => {
    setLoginModal(false);
  };
  return (
    <LoginContext.Provider value={{ loginModal, handleLogin, handleClose, loginState, userLogin, userLogout, userProfile, getUserProfile }}>
      {children}
    </LoginContext.Provider>
  );
};
export { LoginContext, LoginContextProvider };