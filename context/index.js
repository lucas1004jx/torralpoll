import React from 'react';
import { LoginContext, LoginContextProvider } from './LoginContext';
import { PollListContext, PollListContextProvider } from './PollListContext';

const CombinedCtxProvider = ({ children, token }) => (
  <LoginContextProvider token={token}>
    <PollListContextProvider>
      {children}
    </PollListContextProvider>
  </LoginContextProvider>
);


export {
  LoginContext,
  PollListContext,
  CombinedCtxProvider
};