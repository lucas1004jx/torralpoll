import React from 'react';
import Link from 'next/link';
import { Button } from './index';

const InforCard = (props) =>{
  const { message, className='', img, btn1, href1, btn2, href2 } = props;
  const button500 = {
    background: '#fff',
    color: 'var(--color-dark)'
  };

  return(
    <div className={`info-card ${className}`}>
      <figure>
        <img src={img} alt={message} />
      </figure>
      <div className="info">
        <div className="text">{message} </div>
        <div className="button">
          { btn1 &&(
            <Link href={href1}>
              <a>
                <Button name={btn1} style={button500} />
              </a>
            </Link>
          )}
          {btn2 && (
            <Link href={href2}>
              <a>
                <Button name={btn2} style={button500} />
              </a>
            </Link>
          )}
        </div>
      </div>
      <style jsx>
        {`
        .info-card{
          display:flex;
          justify-content:center;
          align-items:center;
          justify-content:space-around;
          width:80%;
          max-width:800px;
          background:var(--color-background);
          padding:35px 30px;
          border-radius:6px;
          box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
        }
        figure{
          margin:0;
          padding:0;
          text-align:center;
          width:50%;
          margin-right:25px;
          position:relative;
        }
        figure:after{
            content:'';
            width:1px;
            height: 80%;
            background:#fff;
            display:block;
            position:absolute;
            right:-5px;
            top:50%;
            transform:translateY(-50%);
          }
        img{
          width:100%;
          max-width:800px;
          height:100%;
          object-fit:contain;
          object-position:center;
        }
        .text{
          font-family:var(--font-header);
          font-size:18px;
          color:#fff;
          margin-top:0;
        }
        .button{
          margin-top:25px;
          text-align:center;
        }
        
      `}
      </style>
    </div>
  );
};

export default InforCard;