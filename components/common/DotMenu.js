import React, { useContext, useState } from 'react';
import nookies from 'nookies';
import Router from 'next/router';
import { PollListContext } from '../../context';
import { crud } from '../../lib';
import { Icons } from './index';

const DotMenu = (props) => {
  const [hover, setHover] = useState(false);

  const { setPollList } = useContext(PollListContext);
 
  const { handleClose, handleDelete, handePollList } = crud;

  const { id, active } = props;
  const { token = '' } = nookies.get();

  const optionClose = async () => {
    await handleClose(id, token);
    const { polls: pollList } = await handePollList(token);
    setPollList(pollList);
    window ?
      window.location.href = '/polls' :
      Router.push('/polls');

  };
  const optionDelete = async () => {
    await handleDelete(id, token);
    const { polls: pollList } = await handePollList(token);
    setPollList(pollList);
    window ?
      window.location.href = '/polls' :
      Router.push('/polls');
  };
  const optionResult = () => {
    Router.push(`/result?id=${id}`);
  };

  // const editPoll = () => {
  //   Router.push(`/edit?id=${id}`);
  // };

  const IconStyle = {
    opacity: hover ? '1' : '0'
  };
  return (

    <div
      className="options-dots"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* <span className="dot edit" onClick={editPoll} data-tooltip="Edit">
        Edit
        <Icons name="file" style={IconStyle} width='10' />
      </span> */}
      
      {active && (
        <>
          <span className="dot result" onClick={optionResult} data-tooltip="See result">
        result
            <Icons name="result" style={IconStyle} />
          </span>
          <span className="dot close" onClick={optionClose} data-tooltip="Close poll">
        close poll
            <Icons name="powerOff" style={IconStyle} />
          </span>
        </>
      )}
      <span className="dot delete" onClick={optionDelete} data-tooltip="Delete poll">
        delete
        <Icons name="delete" style={IconStyle} />
      </span>

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
            .options-dots:hover .dot{
              width:30px;
              height:30px;
              margin-left:5px;
            }
            .dot{
              display:flex;
              justify-content:center;
              align-items:center;
              cursor:pointer;
              width:8px;
              height:8px;
              background:#fff;
              border-radius:100%;
              margin-left:3px;
              transition:all 0.2s ease-out;
              position:relative;
            }
            .dot:hover:before{
              content:attr(data-tooltip);
              display:block;
              font-size:16px;
              color:#fff;
              background:var(--color-text);
              position:absolute;
              top:0;
              left:50%;
              transform: translate(-50%, -120%);
              white-space:nowrap;
              padding:5px 10px;
              border-radius:5px;
              animation: fadeIn 0.5s forwards;
            }
           @keyframes fadeIn {
             0%{transform: translate(-100%, -120%);opacity:0;}
             100%{transform: translate(-50%, -120%);opacity:1;}
           }
            .result:hover{
              background:var(--color-main);
            }
            .close:hover{
              background:var(--color-highlight);
            }
            .delete:hover{
              background:var(--tag-closed);
            }
            // .edit:hover{
            //   background:var(--color-edit);
            // }
            
            `}
      </style>
      <style jsx global>
        {`
          .dot:hover svg{
              fill:#fff;
              transform:scale(1.5);
            }
      `}
      </style>
    </div>
  );
};

export default DotMenu;
