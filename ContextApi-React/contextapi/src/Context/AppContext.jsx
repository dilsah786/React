import { createContext } from "react";

// Create Context
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const name = "Hello Sahila Welcome to World of DIlnawaz"
    
  return (
    <AppContext.Provider value={name}>
      {children}
    </AppContext.Provider>
  );
};







// Provider -> It will make what ever you passing global state

// App --> Parent Component
// we want to make any data as global state data
// i. -> we should have one more component
// ii. -> Put app component in the app context

/*

  <AppContext>  ----> (This one is Parent Component)

    <App/>  -----> (this one is child component for AppContext )

</AppContext>
*/
