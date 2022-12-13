import { createContext, useState } from "react";

// import necessary components ^^^^^

// creating context
const context = createContext();

// context provider sending all the data
const ContextProvider = (props) => {
  // Side Bar Handling with state base of width
  const [sideBar, setsideBar] = useState(
    window.innerWidth < 1000 ? false : true
  );

  return (
    <context.Provider value={{ sideBar, setsideBar }}>
      {props.children}
    </context.Provider>
  );
};

export { context, ContextProvider };
