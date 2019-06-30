import React, { Fragment } from 'react';

const Input = (props) => {
  let { type, children } = props;
  return (
    <Fragment>
      {type !== 'textarea' && <input className="input" {...props} />}
      {type === 'textarea' && (
        <textarea className="textarea" {...props}>
          {children}
        </textarea>
      )}
      <style jsx>
        {`
     
        input, textarea{
            display:block;
            width:100%;
            box-sizing:border-box;
            margin-bottom:15px;
            padding:10px;
            border:1px solid var(--color-main);
        }
        textarea{
          height:200px;
          overflow-y:auto;
          resize: none;
        }
      `}

      </style>
       
    </Fragment>
  );};

export default Input;