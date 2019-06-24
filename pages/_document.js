import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return(
      <html lang="en">
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
          <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:400,700&display=swap" rel="stylesheet" />
          <meta name="description" content="a voting page" />
          <meta charSet="utf-8 " />
          <meta name="robots" content="noindex nofollow" />
          <meta name="viewport" content="width=device-width" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <style jsx global>
            {`
            :root{
                --main-color: #17AD8D;
                --inActive-color:#979797;
                --dark-color: #263C47;
                --tag-all:#FAC314;
                --tag-active:#079AE0;
                --tag-closed:#B85346;
                --main-font: 'Josefin Sans',Helvetica Neue, sans-serif;
            }
            body{
                font-family:var(--main-font);
                padding: 0;
                margin:0;
                box-sizing:border-box;
                width:100%;
                position:relative;
                color:var(--dark-color);
            }
            main{
                max-width:800px;
                margin:0 auto;
                box-sizing:border-box;
                padding: 60px 30px;
                padding-bottom:50px;
            }
            .title{
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
                margin-bottom:10px;
                margin-left:20px;
            }
        
            `}
          </style>
        </body>
      </html>
    );
  }
}

