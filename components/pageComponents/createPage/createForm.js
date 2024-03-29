import React, { useState, useContext, useEffect } from 'react';
import Link from 'next/link';
import nookies from 'nookies';
import Select from 'react-select';
import { Input, Button, Layout, Icons, Modal } from '../../common';
import PollDetail from '../pollsPage/PollDetail';
import { crud, utils } from '../../../lib';
import { LoginContext } from '../../../context';

const CreateForm = (props) => {

  const defaultOptions = [
    {
      name: '',
      votes: []
    },
    {
      name: '',
      votes: []
    },
    {
      name: '',
      votes: []
    },
    {
      name: '',
      votes: []
    }
  ];

  const formatOptionsToObj = (options) => options.reduce((total, option, i) => ({
    ...total,
    [`option${i + 1}`]: { name: option.name, votes: option.votes }
  })
  , {}
  );

  const updatedOptions = (options) => Object.keys(options).map(option => ({ ...options[option] }));
  const formatOptionToArray = (options) => objectToArray(options).map(opt => ({ name: opt.name })).filter(option => !!option.name);
  const formatOptionToSimpleArray = (options) => objectToArray(options).map(opt => ({ name: opt.name })).map(option => option.name);

  const {
    id,
    question: questionProp = '',
    description: descriptionProp = '',
    category: categoryProp = '',
    options: optionsProp = defaultOptions,
    create = false,
    edit = false
  } = props;


  const [question, setQuestion] = useState(questionProp);
  const [description, setDescription] = useState(descriptionProp);
  const [category, setCategory] = useState(categoryProp);
  const [categoryList, setCategorList] = useState([]);
  const [optionItems, setOptionitems] = useState(Object.keys(defaultOptions).length);
  const [options, setOptions] = useState(formatOptionsToObj(optionsProp));
  const [preview, setPreview] = useState(false);
  const { userProfile } = useContext(LoginContext);
  const { objectToArray } = utils;
  const { token = '' } = nookies.get();

  useEffect(() => {
    const getCategoryList = async () => {
      const { data } = await crud.handleCategoryList(token);
      setCategorList(data);
    };
    getCategoryList();
  }, []);

  const addOptionItems = (index) => {
    setOptionitems((optionItems) => optionItems + 1);
    setOptions({ ...options, [`option${index + 1}`]: { name: '', votes: [] } });
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
      options[option]['name'] = value;
      return { ...options };
    });
  };


  const createPoll = (question = 'question', description = '', category = '', options = []) => {
    const { handleCreate } = crud;
    handleCreate(token, question, description, category, objectToArray(options));
  };


  const updatePoll = (question = 'question', description = '', category = '', options = []) => {
    const { handleUpdate } = crud;
    handleUpdate(id, token, question, description, category, updatedOptions(options));
  };

  const previewContent = () => {
    return (
      <Modal>
        <PollDetail
          options={formatOptionToArray(options)}
          name={question}
          description={description}
          createdBy={userProfile}
          category={category}
          preview
          closePreview={() => setPreview(false)}
          createPoll={() => createPoll(question, description, category, formatOptionToSimpleArray(options))}
          editView={!!edit}
          savePoll={() => updatePoll(question, description, category, updatedOptions(options))}
        />
      </Modal>
    );
  };

  const selecetCategory = (selectedOption) => {
    setCategory(selectedOption.value);
  };

  const categoryOptions = categoryList.map(category => (
    {
      value: category,
      label: category
    }
  ));

  const closeStyle = {
    width: 30,
    height: 30,
    position: 'absolute',
    top: '50%',
    right: '-10px',
    transform: 'translate(100%,-50%)'
  };

  return (
    <Layout className="create-polling-page" pageTitle='Create Poll'>
      <div className="page-inner">
        <div className="input-area">
          <h2>Question</h2>
          <Input onChange={(e) => setQuestion(e.target.value)} value={question} placeholder="what do you wanna ask" />
        </div>
        <div className="input-area">
          <h2>Description</h2>
          <Input
            onChange={e => setDescription(e.target.value)}
            value={description}
            placeholder='Describe your question'
            type='textarea'
          />
        </div>
        <div className='category-area'>
          <h2>Category</h2>
          <Select
            options={categoryOptions}
            onChange={selecetCategory}
            placeholder='choose category'
          />
        </div>
        <div className="input-area">
          <h2>Options</h2>
          {
            Object.keys(options).map((option, index) => (
              <div style={{ position: 'relative' }} key={option}>
                <Input
                  onChange={(e) => addOptions(option, e.target.value)}
                  value={options[option]['name']}
                  placeholder={`option${index + 1}`}
                  id={option}
                />
                {Object.keys(options).length > 1 ?
                  <Icons name='close' style={closeStyle} onClick={() => removeOptionItems(option)} /> : null}
              </div>
            ))
          }

        </div>
        <div className="add-button button-container">
          <Button name='add more choice' onClick={() => addOptionItems(optionItems + 1)} />
        </div>
       
        <div className="create-preview-button button-container">
          <Link href="/polls">
            <a>
              <Button name='see list' margin="25" />
            </a>
          </Link>
          <Button name='preview' margin="25" onClick={() => setPreview(true)} />
          {create && (
            <Button
              name='create'
              onClick={() => createPoll(question, description, category, formatOptionToSimpleArray(options))}
            />
          )}
          {edit && <Button name='save' onClick={() => updatePoll(question, description, category, options)} />}
        </div>
        {preview && previewContent()}
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

export default CreateForm;
