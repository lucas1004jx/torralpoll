import React, { useContext } from 'react';
import Link from 'next/link';
import nookies from 'nookies';
import Router from 'next/router';
import { Icons, Tag } from './index';
import { handleClose, handleDelete } from '../../lib/crud';
import { LoginContext } from '../../context';

const List = ({ content, href, status, id }) =>{
  const iconStyle = {
    width: 20,
    height: 'auto',
    fill: `${status === 'active' ?  'var(--color-main)' :'var(--color-inActive)'}`
  };
  const { userProfile: { rol } } = useContext(LoginContext);
  
  const { token='' } = nookies.get();
  const optionClose = () =>{
    handleClose(id, token);
    Router.push('/polls');
  };
  const optionDelete = () =>{
    handleDelete(id, token);
    Router.push('/polls');
  };
  const optionResult = () =>{
    Router.push(`/result?id=${id}`);
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
      {rol === 'Admin' &&(
        <div className="options-dots">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
          <div className="options">
            <span onClick={optionClose}>close</span>
            <span onClick={optionResult}>result</span>
            <span onClick={optionDelete}>delete</span>
          </div>
        </div>
      )
      }
      
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
            .options-dots{
               position:absolute;
               right:0;
               top:50%;
               display:inline-block;
               transform:translate(100%,-50%);
              font-size:0;
              padding:10px 0;
            }
            .options-dots:hover .options{
              display:flex;
              opacity:1;
            }
            .dot{
              display:inline-block;
              width:3px;
              height:3px;
              background:var(--color-main);
              border-radius:100%;
              margin-left:3px;
            }
            .options{
              display:flex;
              flex-direction:column;
              background:var(--color-background);
              padding:10px;
              position:absolute;
              left:-8px;
              top:10px;
              transform:translate(-100%,-50%);
              border-radius:4px;
             z-index:2;
             display:none;
             opacity:0;
            }
            .options:after{
              content:'';
              display:block;
              width:0;
              heght:0;
              border-left:10px solid var(--color-background);
              border-top:10px solid transparent;
              border-bottom:10px solid transparent;
              position:absolute;
              top:50%;
              right:1px;
              transform:translate(100%,-50%);
            }
            .options span{
              font-size:16px;
              margin-bottom:5px;
              color:#fff;
            }
            .options span:last-child{
              margin-bottom:0;
            }
      `}
      </style>
    </div>
  );
};

export default List;