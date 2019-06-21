import React from 'react';
import Link from 'next/link';
import { Icons } from './index';

const List = ({ content, href }) =>{
  const iconStyle = {
    width: 20,
    height: 'auto',
    fill: 'var(--main-color)' 
  };
  return ( 
    <div className="list">
      <div className="list-icon">
        <Icons name='polygon' style={iconStyle} />
      </div>
      
      <div className="list-content">
        <Link href={href}>
          <a>
            {content}
          </a>
        </Link>
        
      </div>
      <style jsx>
        {`
           
            .list{
                cursor:pointer;
                list-style:none;
                position:relative;
                padding-left:25px;
                margin-bottom:15px;
            }
            .list-content{
                font-size:22px;
            }
            .list-content:first-letter{
                text-transform:capitalize;
            }
            .list-icon{
                position:absolute;
                left:0;
                top:0;
            }
      `}
      </style>
    </div>
  );
};

export default List;