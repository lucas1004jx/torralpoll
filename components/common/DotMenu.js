import React, {  useContext, useState } from 'react';
import nookies from 'nookies';
import Router from 'next/router';
import { PollListContext  } from '../../context';
import { crud } from '../../lib';
import { Icons } from './index';

const DotMenu = (props) => {
  const [hover, setHover] = useState(false);
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

  const IconStyle = {
    opacity: hover ? '1' : '0',

  };
  return ( 
     
    <div
      className="options-dots" 
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
    >
      <span className="dot" onClick={optionResult}>
        result
        <Icons name="result" style={IconStyle} />
      </span>
      <span className="dot" onClick={optionClose}>
        close poll
        <Icons name="powerOff" style={IconStyle} />
      </span>
      <span className="dot" onClick={optionDelete}>
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
              width:25px;
              height:25px;
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
              transition:width 0.2s ease-out, height 0.2s ease-out;
            }
            
            `}
      </style>
    </div>
  );
};

export default DotMenu;