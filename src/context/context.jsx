import { createContext, useState } from "react";

// creating context
const context = createContext();

// context provider sending all the data
const ContextProvider = (props) => {
  // Side Bar Handling with state base of w
  const [sideBar, setsideBar] = useState(
    window.innerWidth < 1000 ? false : true
  );
  const [manual, setManual] = useState(false);
  //

  return (
    <context.Provider value={{ sideBar, setsideBar, manual, setManual }}>
      {props.children}
    </context.Provider>
  );
};

export { context, ContextProvider };
