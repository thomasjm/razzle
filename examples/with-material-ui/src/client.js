
import App from './App';
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { hydrate } from 'react-dom';
import theme from './theme';

hydrate(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
  () => {
    // [ReHydratation](https://github.com/cssinjs/jss/blob/master/docs/ssr.md)
    const jssStyles = document.getElementById('jss-ssr');
    if (jssStyles && jssStyles.parentNode)
      jssStyles.parentNode.removeChild(jssStyles);

    window["hydrated"] = true;
    console.log("Done hydrating");
  }
);

if (module.hot) {
  module.hot.accept();
}
