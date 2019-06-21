import React, { useState } from 'react';
import { Input, Button, Checkbox, Layout } from '../components';


const CreatePolling = () => {

  const [singleChoice, setSingleChoice] = useState(true);
  const [secretBallot, setScreteBallot] = useState(true);
  const [choiceItems, setChoiceItems] = useState(4);
    
  const handleChoice = () => {
    setSingleChoice(!singleChoice);
  };
  const handleBalot = () => {
    setScreteBallot(!secretBallot);
  };

  const addChoice = () => {
    setChoiceItems(choiceItems + 1);
  };
  return(
    <Layout className="create-polling-page">
      <div className="page-inner">
        <Input title='question' />
        <Input title='description' />
        <div>
          <Input title='choices' num={choiceItems} />
        </div>
        <div className="add-button button-container">
          <Button name='add more choice' onClick={addChoice} />
        </div>
        <div className="options">
          <h3>OPTIONS</h3>
          <div className="option-section">
            <div className="divider" />
            <Checkbox
              option='Single Choice'
              checked={singleChoice}
              onSelect={()=>handleChoice()}
            />
            <Checkbox
              option='Multiple Choice'
              checked={!singleChoice}
              onSelect={()=>handleChoice()}
            />
          </div>
          <div className="option-section">
            <div className="divider" />
            <Checkbox
              option='secret ballot'
              checked={secretBallot}
              onSelect={()=>handleBalot()}
            />
            <Checkbox
              option='open ballot'
              checked={!secretBallot}
              onSelect={()=>handleBalot()}
            /> 
          </div>
          <div className="option-section">
            <div className="divider" />
            <Checkbox option='set active time' />
          </div>
        </div>
        <div className="create-preview-button button-container">
          <Button name='preview' />
          <Button name='create' />
        </div>
      </div>
            
      <style jsx>
        {`
                .create-polling-page{
                    margin:0 auto;
                }
                .page-inner{
                    width:80%;
                    box-sizing:border-box;
                    margin:0 auto;
                    max-width:800px;
                }
                .add-button{
                    text-align:center;
                }
                .create-preview-button{
                    text-align:right;
                }
                .button-container{
                    margin-right:-10px;
                }
                .button-container:last-child{
                    margin-top:30px;
                }
                .divider{
                    height:1px;
                    background:var(--inActive-color);
                    margin: 30px 0;
                }
            `}
      </style>
    </Layout>
  );
};

export default CreatePolling;