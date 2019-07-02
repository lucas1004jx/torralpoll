import React from 'react';
import App, { Container } from 'next/app';
import { LoginContextProvider } from '../components/context';


class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    }

    return {
      pageProps
    };
  }


  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <LoginContextProvider>
          <Component {...pageProps} />
        </LoginContextProvider>
      </Container>
    );
  }
}

export default MyApp;