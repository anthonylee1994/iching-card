import React from 'react';
import ReactDOM from 'react-dom';
import { Index } from './pages';
import { ChakraProvider } from '@chakra-ui/react';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { chakraTheme } from './lib/chakra/chakraTheme';
import { HashRouter } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ChakraProvider theme={chakraTheme}>
        <Index />
      </ChakraProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
