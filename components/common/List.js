import React from 'react';
import Link from 'next/link';
import { Icons, Tag } from './index';

const List = ({ content, href, status }) =>{
  const iconStyle = {
    width: 20,
    height: 'auto',
    fill: `${status === 'active' ?  'var(--color-main)' :'var(--color-inActive)'}`
  };
  return ( 
    <div className={`list ${status ==='closed' ? 'closed' : ''}`}>
      <Link href={href}>
        <a>
          <div className="list-icon">
            <Icons name='polygon' style={iconStyle} />
          </div>
          <div className="tag">
            <Tag name={status} status={status} style={{ width: '70px' }} />
          </div>
          <div className="list-content">
            {content}
          </div>
        </a>
      </Link>
      <style jsx>
        {`
           
            .list{
                list-style:none;
                position:relative;
                padding-left:25px;
                padding-right:140px;
                margin-bottom:25px;
                cursor:pointer;
               
            }
            .list a{
                text-decoration:none;
               
            }
            .list-content{
                font-size:22px;
                color:var(--color-dark);
            }
            .list.closed .list-content{
                color:var(--color-inActive);
            }
            .list-content:after{
                content:"";
                display:block;
                width:0%;
                height:2px;
                background:var(--tag-${status});
                transition:width 0.5s linear;
            }
            .list-content:first-letter{
                text-transform:capitalize;
            }
            .list-icon{
                position:absolute;
                left:0;
                top:0;
            }
            .tag{
                position:absolute;
                right:0;
            }
            .list-content:hover:after{
                width:100%;
            }
      `}
      </style>
    </div>
  );
};

export default List;