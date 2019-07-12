import React, { createContext, useState } from 'react';

const PollListContext = createContext();

const PollListContextProvider = ({ children }) => {
  const [pollList, setPollList] = useState([]);


  const value= {
    pollList,
    setPollList
  };

  return(
    <PollListContext.Provider value={value}>
      {children}
    </PollListContext.Provider>
  );
};

export  { PollListContext, PollListContextProvider };