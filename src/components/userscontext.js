import React, { createContext, useState } from 'react';
import Data from './data';
const UsersContext = createContext();

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(Data);

  return (
    <UsersContext.Provider value={{ users, setUsers }}>
      {children}
    </UsersContext.Provider>
  );
};

export { UsersProvider, UsersContext };