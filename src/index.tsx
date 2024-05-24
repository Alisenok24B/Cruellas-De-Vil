import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = '866643980887-43d7m5qkq33283vh2pldk53mkmuok5om.apps.googleusercontent.com';

const Main = () => (
  <GoogleOAuthProvider clientId={clientId}>
    <App />
  </GoogleOAuthProvider>
);

export default Main;

let rootElement: ReactDOM.Root;

export const mount = (Component, element = document.getElementById('app')) => {
  rootElement = ReactDOM.createRoot(element);
  rootElement.render(<Component />);

  if (module.hot) {
    module.hot.accept('./app', () => {
      rootElement.render(<Component />);
    });
  }
};

export const unmount = () => {
  rootElement.unmount();
};