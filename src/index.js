// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./redux/store";
import theme from "./chakra/theme";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
        <Provider store={store}>
            {/*<ChakraProvider theme={theme}>*/}
            {/*    <ColorModeScript initialColorMode={theme.config.initialColorMode} />*/}
                <App />
            {/*</ChakraProvider>*/}
        </Provider>
);

reportWebVitals();
