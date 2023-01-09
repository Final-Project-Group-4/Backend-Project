import { createContext, useState } from 'react';
import axios from 'axios';
import React from 'react';

 const AppContext = createContext(null);

 const AppContextProvider = ({ children }) => {
   const [userData, setUserData] = useState(null);

   
    const defaultContext ={userData}

  return (
     <AppContext.Provider value={defaultContext}>
       {children}
     </AppContext.Provider>
   );
 };

 export {AppContext, AppContextProvider};
