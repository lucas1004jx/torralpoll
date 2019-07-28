import React, {  useContext } from 'react';
import nookies from 'nookies';
import Router from 'next/router';
import { PollListContext  } from '../../context';
import { crud } from '../../lib';

const DotMenu = (props) => {
  const { setPollList } = useContext(PollListContext);

  const { handleClose, handleDelete, handePollList } = crud;

  const { id } = props;
  const { token='' } = nookies.get();
  
  const optionClose = async () =>{
    await handleClose(id, token);
    const { polls: pollList } = await handePollList(token);
    setPollList(pollList);
    window?
      window.location.href='/polls':
      Router.push('/polls');
    
  };
  const optionDelete = async () =>{
    await handleDelete(id, token);
    const { polls: pollList } = await handePollList(token);
    console.log('after delete polllist', pollList);
    setPollList(pollList);
    window?
      window.location.href='/polls':
      Router.push('/polls');
  };
  const optionResult = () =>{
    Router.push(`/result?id=${id}`);
  };

  return ( 
     
    <div className="options-dots">
      <span className="dot" />
      <span className="dot" />
      <span className="dot" />
      <div className="options">
        <span onClick={optionClose}>close</span>
        <span onClick={optionResult}>result</span>
        <span onClick={optionDelete}>delete</span>
      </div>
       
      <style jsx>
        {`
            .options-dots{
               position:absolute;
               right:0;
               top:50%;
               display:flex;
               transform:translate(100%,-50%);
              font-size:0;
              z-index:2;
              padding:10px 0;
              cursor:pointer;
            }
            .options-dots:hover .options{
              display:flex;
              opacity:1;
            }
            .dot{
              display:inline-block;
              width:5px;
              height:5px;
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
              right:-8px;
              top:10px;
              transform:translate(100%,-50%);
              border-radius:4px;
             z-index:2;
             display:none;
             opacity:0;
             cursor:pointer;
            }
            .options:after{
              content:'';
              display:block;
              width:0;
              heght:0;
              border-right:10px solid var(--color-background);
              border-top:10px solid transparent;
              border-bottom:10px solid transparent;
              position:absolute;
              top:50%;
              left:1px;
              transform:translate(-100%,-50%);
            }
            .options span{
              font-size:16px;
              margin-bottom:5px;
              color:#fff;
            }
            .options span:last-child{
              margin-bottom:0;
            }`}
      </style>
    </div>
  );
};

export default DotMenu;