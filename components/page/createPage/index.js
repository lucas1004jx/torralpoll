import React, { useState } from 'react';
import axios from 'axios';
import Router from 'next/router';
import { Input, Button, Checkbox, Layout, Icons } from '../../common';


const CreatePollPage = () => {

  const [singleOption, setSingleOption] = useState(true);
  const [optionItems, setOptionItems] = useState(4);
  const [question, setQuestion] = useState('');
  const [description, setDescription] = useState('');


  const defaultOptions = {
    option1: '',
    option2: '',
    option3: '',
    option4: ''
  };
  const [options, setOptions] = useState(defaultOptions);

  const handleOption = () => {
    setSingleOption(!singleOption);
  };
 

  const addOptionItems = () => {
    setOptionItems(optionItems + 1);
  };

  const removeOptionItems = () => {
    if(optionItems >1) {
      setOptionItems(optionItems -1);
    }
    
  };

  const optionItemsArray = (num) => (
    new Array(num).fill('option').map((option, index)=>(
      `${option}${index+1}`
    )
    )
  );

  const addOptions = (option, value)=>{
    setOptions({ ...options, [option]: value });
  };



  const createPoll = (question='question', options)=>{
    const optionsArray = Object.keys(options).map(key => options[key]);
    axios
      .post('https://torralbot-back.herokuapp.com/create', {
        name: question,
        options: optionsArray,

      })
      .then(()=>Router.push('/polls'))
      .catch(err=>`something went wrong, error message ${err}`);
  };

  const closeStyle = {
    width: 30,
    height: 30,
    position: 'absolute',
    top: '50%',
    right: '-10px',
    transform: 'translate(100%,-50%)'
  };
  return(
    <Layout className="create-polling-page" pageTitle='TorralPoll-Create'>
      <div className="page-inner">
        <div className="input-area">
          <h2>Question</h2>
          <Input onChange={(e)=>setQuestion(e.target.value)} value={question} placeHolder="what do you wanna ask" />
        </div>
        <div className="input-area">
          <h2>Description</h2>
          <Input onChange={e => setDescription(e.target.value)} value={description} placeHolder='Describe your question' type='textarea' />
        </div>
        
        <div className="input-area">
          <h2>Options</h2>
          {
            optionItemsArray(optionItems).map(option => (
              <div style={{ position: 'relative' }}>
                <Input onChange={(e)=>addOptions(option, e.target.value)} value={options[option]} key={option} placeHolder={option} />
                <Icons name='close' style={closeStyle} onClick={removeOptionItems} />
              </div>
            ))
          }
          
        </div>
        <div className="add-button button-container">
          <Button name='add more choice' onClick={addOptionItems} />
        </div>
        <div className="config">
          <h3>Configurations</h3>
          <div className="option-section">
            <div className="divider" />
            <Checkbox
              option='Single Choice'
              checked={singleOption}
              onSelect={()=>handleOption()}
            />
            <Checkbox
              option='Multiple Choice'
              checked={!singleOption}
              onSelect={()=>handleOption()}
            />
          </div>
          
          <div className="option-section">
            <div className="divider" />
            <Checkbox option='set active time' />
          </div>
        </div>
        <div className="create-preview-button button-container">
          <Button name='preview' />
          <Button name='create' onClick={()=>createPoll(question, options)} />
          
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
                .input-area{
                    padding:20px 0;
                }
                 h2 {
                    text-transform: capitalize;
                    margin:0;
                    margin-bottom:10px;
                  }
            `}
      </style>
    </Layout>
  );
};

export default CreatePollPage;