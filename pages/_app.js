import React from 'react';
import App, { Container } from 'next/app';
import { getToken } from '../lib';
import { LoginContextProvider } from '../components/context';

class MyApp extends App {

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
  
    const { req } = ctx;
    const token = getToken(req);
    //console.log('_app token ----->', token);
    if (Component.getInitialProps) {
      pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    }
   
    return {
      pageProps,
      token
    };
  }

  render() {
    const { Component, pageProps, token } = this.props;
    
    return (
      <Container>
        <LoginContextProvider token={token}>
          <Component {...pageProps} />
        </LoginContextProvider>
      </Container>
    );
  }
}

export default MyApp;