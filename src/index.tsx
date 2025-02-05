/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { GoogleOAuthProvider } from '@react-oauth/google';
import i18next from 'i18next';
import { i18nextReactInitConfig } from '@brojs/cli';

i18next.t = i18next.t.bind(i18next)
const i18nextPromise = i18nextReactInitConfig(i18next)

const clientId = '866643980887-43d7m5qkq33283vh2pldk53mkmuok5om.apps.googleusercontent.com';

const Main = () => (
  <GoogleOAuthProvider clientId={clientId}>
    <App />
  </GoogleOAuthProvider>
);

export default Main;

let rootElement: ReactDOM.Root;

export const mount = async (Component, element = document.getElementById('app')) => {
  rootElement = ReactDOM.createRoot(element);
  await i18nextPromise
  rootElement.render(<Component />);
  // @ts-ignore
  if (module.hot) {
    // @ts-ignore
    await i18next.reloadResources()
    module.hot.accept('./app', () => {
      rootElement.render(<Component />);
    });
  }
};

export const unmount = () => {
  rootElement.unmount();
};
