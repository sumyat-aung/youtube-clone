import { createContext } from "react";

const context = createContext();

const ContextProvider = (props) => {
  return <context.Provider value="value">{props.children}</context.Provider>;
};

export { context, ContextProvider };
