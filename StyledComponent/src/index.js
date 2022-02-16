import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';

const darkTheme = {
  textColor: "w"
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

