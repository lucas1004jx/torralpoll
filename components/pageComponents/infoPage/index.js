import React from 'react';
import { Layout, InfoCard } from '../../common';

const InfoPage = (props) =>{
  const { pageTitle, img, message, btn1, href1, btn2, href2 } = props;
  return (
    <Layout className="info-page" hideHeader pageTitle={pageTitle}>
      <div className="page-inner">
        <InfoCard 
          img={img}
          message={message}
          btn1={btn1}
          href1={href1}
          btn2={btn2}
          href2={href2}
        />
          
      </div>
      <style jsx>
        {`
          .page-inner{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top:50px;
            height:calc(100vh - 180px);
          }
          
        `}
      </style>
    </Layout>
  );
};

export default InfoPage;