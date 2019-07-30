import React from 'react';
import { NextSeo } from 'next-seo';

const SEO = () => (
  <>
    <NextSeo
      title="TorralPoll"
      description="A voting page from GuideSmiths"
      canonical="https://torralpoll.lucas1004jx.now.sh/"
      openGraph={{
        url: 'https://torralpoll.s3.eu-west-2.amazonaws.com/openGraphic.jpg',
        title: 'TorralPoll',
        description: 'A voting page from GuideSmiths',
        images: [
          {
            url: 'https://torralpoll.s3.eu-west-2.amazonaws.com/openGraphic.jpg',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
          },
          {
            url: 'https://torralpoll.s3.eu-west-2.amazonaws.com/openGraphic.jpg',
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
          },
          { url: 'https://torralpoll.s3.eu-west-2.amazonaws.com/openGraphic.jpg' },
          { url: 'https://torralpoll.s3.eu-west-2.amazonaws.com/openGraphic.jpg' },
        ],
        site_name: 'TorralPoll',
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />
  </>
);

export default SEO;