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

            @font-face {
                font-family: Chalkduster;
                src: url('/static/fonts/Chalkduster.woff2');
              }
            @font-face {
              font-family: 'African Style';
              src: url('/static/fonts/AfricanStyle.woff2') format('woff2'),
                  url('AfricanStyle.woff') format('woff');
              font-weight: normal;
              font-style: normal;
            }
            :root{
                --color-main: #17AD8D;
                --color-background:#5F9EA0;
                --color-inActive:#979797;
                --color-dark:#263C47;
                --color-text:#4a4a4a;
                --color-highlight:#FAC314;
                --color-link:#079AE0;
                --color-shadow:rgba(0,0,0,0.3);
                 --color-gradient:linear-gradient(90deg, rgba(23,173,141,1) 0%, rgba(84,198,255,1) 100%);
                --tag-all:#FAC314;
                --tag-active:#079AE0;
                --tag-closed:#F55F44;
                --font-main:'Lato', sans-serif;
                --font-header: 'Chalkduster', 'Lato', sans-serif;
                --font-fantasy:'African Style', 'Lato', sans-serif;
            }
            
            body{
                font-family:var(--font-main);
                font-weight:normal;
                padding: 0;
                margin:0 auto;
                box-sizing:border-box;
                position:relative;
                color:var(--color-text);
                -webkit-font-smoothing: antialiased;
	              -moz-osx-font-smoothing: grayscale;
            }
            main{
                position:relative;
                max-width:1400px;
                min-height:100vh;
                margin:0 auto;
                box-sizing:border-box;
                padding: 60px 30px;
                padding-bottom:50px;
                overflow:hidden;
            }
           

            h1{
                text-transform:uppercase;
                font-size:36px;
                margin:0;
                font-family:var(--font-fantasy);
                font-weight:normal;
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