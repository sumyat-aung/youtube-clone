import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { ContextProvider } from "./context/context";
import store from "./redux/store";
import { Provider } from "react-redux";
import App from "./app/App";

import "./scss/style.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
