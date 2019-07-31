import React from 'react';
import Link from 'next/link';
import { Layout, Checkbox, Button } from '../../common';

const OptionPage = (props) => {
  const { description, options, votedOption, createdBy } = props;
  return (
    <Layout className="poll-detail-page" author={createdBy.name} pageTitle='User Option '>
      <div className="page-inner">
        <p className="description">
          {description}
        </p>

        <div className="left">
          <ul className="lists">
            {options && options.map((option, i) => (
              option.name === votedOption ? (
                <Checkbox
                  option={option.name}
                  key={i}
                  disabled
                  checked
                />
              ): (
                <Checkbox
                  option={option.name}
                  key={i}
                  disabled
                />
              )))}
          </ul>
        </div>
        <p className="userOption">Your vote <span>{votedOption}</span></p>
        <div className="submit-button">
          <Link href="/polls">
            <a>
              <Button name="Back to list" />
            </a>
          </Link>
        </div>
      </div>
      <style jsx>
        {`
       
          .selected {
              color: var(--color-dark)
          }
          
      
        ul{
            padding:0;
            margin:0;
            margin-top:30px;
        }
        .submit-button{
            text-align: right;
            margin-top:50px;
        }
        .left{
            width:60%;
        }
        
        .description{
          font-size:18px;
          line-height:1.4;
        }
        .userOption{
          font-size:24px;
        }
        .userOption span{
          color:var(--color-main);
          text-transform:capitalize;
        }
      `}
      </style>
    </Layout>
  );
};

export default OptionPage;