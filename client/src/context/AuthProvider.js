import { createContext, useState } from 'react';
import axios from 'axios';
import React from 'react';

 const AuthContext = createContext();

 const AuthContextProvider = ({ children }) => {
   const [auth, setAuth] = useState(null);

   
    const defaultContext = {auth, setAuth}

  return (
     <AuthContext.Provider value={defaultContext}>
       {children}
     </AuthContext.Provider>
   );
 };

 export {AuthContext, AuthContextProvider};
