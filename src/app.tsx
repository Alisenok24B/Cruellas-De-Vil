import React from 'react';

import { BrowserRouter } from "react-router-dom";
import { PageRoutes } from "./routes";

import { globalStyles } from "./global-styles";
import { Global } from "@emotion/react";


const App = () => {
  return (
    <BrowserRouter>
      <Global styles={globalStyles} />
      <PageRoutes/>
    </BrowserRouter>
  );
};

export default App;
