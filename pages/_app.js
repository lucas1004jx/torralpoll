import React from 'react';
import App, { Container } from 'next/app';
import nookies from 'nookies';
import { CombinedCtxProvider } from '../context';

class MyApp extends App {
 
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    const { token }= nookies.get(ctx);
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
        <CombinedCtxProvider token={token}>
          <Component {...pageProps} />
        </CombinedCtxProvider>
        <style jsx global>
          {`
            :root{
                --color-main: #17AD8D;
                --color-background:#5F9EA0;
                --color-inActive:#979797;
                --color-dark:#263C47;
                --color-text:#4a4a4a;
                --color-shadow:rgba(0,0,0,0.3);
                --tag-all:#FAC314;
                --tag-active:#079AE0;
                --tag-closed:#B85346;
                --font-main:'Lato', sans-serif;
                --font-header: 'Chalkduster', 'Lato', sans-serif;
            }
            @font-face {
              font-family: Chalkduster;
              src: url('/static/fonts/Chalkduster.woff2');
            }
            body{
                font-family:var(--font-main);
                padding: 0;
                margin:0;
                box-sizing:border-box;
                width:100%;
                position:relative;
                color:var(--color-dark);
            }
            main{
                max-width:1400px;
                min-height:100vh;
                margin:0 auto;
                box-sizing:border-box;
                padding: 60px 30px;
                padding-bottom:50px;
            }
            .title{
                font-family: var(--font-header);
                display:flex;
                margin:20px 0;
            }

            h1{
                text-transform:uppercase;
                font-size:60px;
                margin:0;
            }
            .author{
                align-self:flex-end;
                margin-left:15px;
                font-size:14px;
            }
           
            
          .poll-detail-page h1{
            font-size:28px; 
          }

          
          
            `}
        </style>
      </Container>
    );
  }
}

export default MyApp;