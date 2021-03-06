import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from './style/theme';
import  {StyledEngineProvider}  from '@mui/material';
import GlobalStyle from './style/GlobalStyle';

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <StyledThemeProvider theme={theme}>
      <GlobalStyle/>
        <App />
    </StyledThemeProvider>
  </StyledEngineProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
