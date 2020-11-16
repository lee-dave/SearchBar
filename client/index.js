/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from 'react-dom';
import { App } from './App.js';
import './styles/styles.scss';
import { SearchContextProvider } from './context/SearchContext'

render(
  <SearchContextProvider>
    <App />
  </SearchContextProvider>,
  document.getElementById('root'),
);

export default App
