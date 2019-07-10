import React from 'react';
import { Icons } from './index';


const Checkbox = ({ option, checked, onSelect, disabled }) => {
  const polygonStyle = {
    width: 20,
    height: 'auto',
    fill: checked ? 'var(--color-main)' : 'var(--color-inActive)',
    transform: checked ? 'rotate(360deg) scale(1.1)' : 'rotate(0deg) scale(1)'
  };
  return (
    <div className={`option ${checked ? 'checked' :''}`}>
      <div className="polygon">
        <Icons name='polygon' style={polygonStyle} /> 
      </div>
      <input type="radio" id={option} value={option} checked={checked} onChange={onSelect} name={option} disabled={disabled} />
      <label htmlFor={option}>{option}</label>
      <style jsx>
        {`
       label,input,.option{
            cursor:${!disabled ? 'pointer': 'default'};
        }
        label{
            display:block;
            padding: 15px 10px;
            font-size:16px;
            transition: color 0.3s ease;
            text-transform:capitalize;
        }
        .option{
            position:relative;
            border: 1px solid #9B9B9B;
            padding-left:30px;
            margin-bottom:15px;
            border-radius:4px;
            
        }
        .option.checked{
            box-shadow:2px 2px 5px rgba(38,60,71,0.3);
            border-color: #17AD8D ;
        }
        .option:hover{
            border-color:${!disabled ? '#17AD8D' : 'none'} ;
        }
        
        input{
            position:absolute;
            left:0;
            top:50%;
            transform : translate(-100%, -50%);
            opacity:0;
        }
        .polygon{
            position:absolute;
            left:10px;
            top:50%;
            transform:translate(0,-50%);
            font-size:0;
        }
        // label:before{
        //     content:'';
        //     display:block;
        //     width:15px;
        //     height:15px;
        //     background:#9B9B9B;
        //     transition: background 0.3s ease;
        //     position:absolute;
        //     left:25px;
        //     top:50%;
        //     transform : translate(-100%, -50%);
        //     -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        //     clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        // }
          input:checked + label:before{
            background:#17AD8D;
          
        }
        input:checked + label{
            color:#17AD8D;
        }
        
      `}
      </style>
    </div>
  );
};

export default Checkbox;