import React from 'react';
import { Icons } from './index';

const List = ({content}) =>{
   return ( 
    <div>
       <Icons name='polygon'/>
        <li className="list">
            {content}
        </li>
         <style jsx>{`
        li{
                cursor:pointer;
            }
            label{
                display:block;
            }
      `}
      </style>
    </div>
    )
}

export default List;