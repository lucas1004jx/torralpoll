import React, { useState, useContext } from 'react';
import axios from 'axios';
import Router from 'next/router';
import Link from 'next/link';
import { getToken } from '../../../lib';
import { server } from '../../../config';
import { Input, Button, Checkbox, Layout, Icons } from '../../common';
import { LoginContext } from '../../context';


const CreatePollPage = () => {
  const { loginState, userProfile } = useContext(LoginContext);
  const { rol } = userProfile;
  
  if(!loginState) {
    return(
      <Layout>
        <div>YOU NEED TO LOG IN TO CREATE POLL</div>
      </Layout>
    );
  }
  if(rol !== 'Admin') {
    return (
      <Layout>
        <div>YOU ARE NOT AUTHORIZED TO CREATE POLL</div>
      </Layout>
    );
  }
  const defaultOptions = {
    option1: '',
    option2: '',
    option3: '',
    option4: ''

  };
  const [singleOption, setSingleOption] = useState(true);
  const [question, setQuestion] = useState('');
  const [description, setDescription] = useState('');
  const [optionItems, setOptionitems] = useState(Object.keys(defaultOptions).length);
  const [options, setOptions] = useState(defaultOptions);



  const handleOption = () => {
    setSingleOption(!singleOption);
  };


  const addOptionItems = (index) => {
    setOptionitems(optionItems + 1);
    setOptions({ ...options, [`option${index}`]: '' });
  };

  const removeOptionItems = (id) => {
    setOptionitems(optionItems - 1);
    if (optionItems > 1) {
      delete options[id];
    }

  };


  const addOptions = (option, value) => {
    //for support safari object keys order
    setOptions(() => {
      options[option] = value;
      return { ...options };
    });
  };



  const createPoll = (question = 'question', description, options) => {
    const token  = getToken();
    const optionsArray = Object.keys(options).map(key => options[key]);
    axios({
      method: 'post',
      url: `${server}/create`,
      data: {
        name: question,
        description,
        options: optionsArray,
      },
      headers: { Authorization: token }
    })
      .then(() => Router.push('/polls'))
      .catch(err => `something went wrong, error message ${err}`);
  };

  const closeStyle = {
    width: 30,
    height: 30,
    position: 'absolute',
    top: '50%',
    right: '-10px',
    transform: 'translate(100%,-50%)'
  };
  return (
    <Layout className="create-polling-page" pageTitle='TorralPoll-Create'>
      <div className="page-inner">
        <div className="input-area">
          <h2>Question</h2>
          <Input onChange={(e) => setQuestion(e.target.value)} value={question} placeholder="what do you wanna ask" />
        </div>
        <div className="input-area">
          <h2>Description</h2>
          <Input onChange={e => setDescription(e.target.value)} value={description} placeholder='Describe your question' type='textarea' />
        </div>

        <div className="input-area">
          <h2>Options</h2>
          {
            Object.keys(options).map((option, index) => (
              <div style={{ position: 'relative' }} key={option}>
                <Input onChange={(e) => addOptions(option, e.target.value)} value={options[option]} placeholder={`option${index + 1}`} id={option} />
                {Object.keys(options).length > 1 ? <Icons name='close' style={closeStyle} onClick={() => removeOptionItems(option)} /> : null}
              </div>
            ))
          }

        </div>
        <div className="add-button button-container">
          <Button name='add more choice' onClick={() => addOptionItems(optionItems + 1)} />
        </div>
        <div className="config">
          <h3>Configurations</h3>
          <div className="option-section">
            <div className="divider" />
            <Checkbox
              option='Single Choice'
              checked={singleOption}
              onSelect={() => handleOption()}
            />
            <Checkbox
              option='Multiple Choice'
              checked={!singleOption}
              onSelect={() => handleOption()}
            />
          </div>

          <div className="option-section">
            <div className="divider" />
            <Checkbox option='set active time' />
          </div>
        </div>
        <div className="create-preview-button button-container">
          <Link href="/polls">
            <a>
              <Button name='see list' />
            </a>
          </Link>
          {/* <Button name='preview' /> */}
          <Button name='create' onClick={() => createPoll(question, description, options)} />

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
                    background:var(--color-inActive);
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