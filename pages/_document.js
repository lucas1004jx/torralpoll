import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const props = await Document.getInitialProps(ctx);
    //console.log('document ctx', ctx.res.statusCode);
    //console.log('document pros', props);
    return { ...props };
  }
  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
          <link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" rel="stylesheet" />
          <link rel="canonical" href="https://torralpoll.lucas1004jx.now.sh/" />
          <link rel="icon" type="image/x-icon" href="/static/favicon.ico" />
          <meta charSet="utf-8 " />
          <meta name="robots" content="noindex nofollow" />
          <meta name="viewport" content="width=device-width" />
        </Head>
        <body>
          <Main />
          <NextScript />

        </body>
      </html>
    );
  }
}

