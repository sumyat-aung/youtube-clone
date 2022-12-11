import { createContext, useState } from "react";

const context = createContext();

const ContextProvider = (props) => {
  // Side Bar Handling with state & event
  const [sideBar, setsideBar] = useState(false);

  //

  return (
    <context.Provider value={{ sideBar, setsideBar }}>
      {props.children}
    </context.Provider>
  );
};

export { context, ContextProvider };
