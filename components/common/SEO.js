import React from 'react';
import Head from 'next/head';



const SEO = ({ 
  seoTitle = 'TorralPoll',
  seoDescription = 'A voting page from GuideSmiths. It helps you make better team decisions, and get fair results.',
  seoImgSrc = 'https://torralpoll.s3.eu-west-2.amazonaws.com/openGraphic.jpg'
}) => {
 
  return (
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" rel="stylesheet" />
      <link rel="canonical" href="https://torralpoll.lucas1004jx.now.sh/" />
      <meta name="description" content={seoDescription} />
      <meta charSet="utf-8 " />
      <meta name="robots" content="noindex nofollow" />
      <meta name="viewport" content="width=device-width" />
      {/* social media seo tag */} 
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImgSrc} />
      <meta property="og:image:alt" content="TorralPoll" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />
      <meta property="og:site_name" content="TorraPoll" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImgSrc} />
      <meta name="twitter:site" content="@guidesmiths" />
      <meta name="twitter:creator" content="@lucas1004jx" />

    </Head>
  );
};

export default SEO;