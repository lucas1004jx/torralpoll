import React from 'react';
import CreateForm from '../createPage/createForm';

const EditPage = (props) => {
  const { id, name, description, category, options } = props;
  const formattedOptions = options.map(option => option.name);
  const pageInfo = {
    id,
    singleOption: true,
    question: name,
    description,
    category,
    options: formattedOptions,
    edit: true
  };
  return <CreateForm {...pageInfo} />;
};

export default EditPage;
