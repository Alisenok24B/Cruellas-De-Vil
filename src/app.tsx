import React from "react";

import { BrowserRouter } from "react-router-dom";
import { PageRoutes } from "./routes";

import { globalStyles } from "./global-styles";
import { Global } from "@emotion/react";
import { Provider } from "react-redux";
import { store } from "./store/store";

import 'antd/dist/reset.css';


const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Global styles={globalStyles} />
        <PageRoutes />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
