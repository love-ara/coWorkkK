import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Dimmer, Header} from "semantic-ui-react";
import {ReactKeycloakProvider} from "@react-keycloak/web";
import keycloak from "./keycloak";




const initOptions = { pkceMethod: 'S256' }

const loadingComponent = (
    <Dimmer inverted active={true} page>
        <Header style={{ color: '#4d4d4d' }} as='h2' icon inverted>
            <Icon loading name='cog' />
            <Header.Content>Keycloak is loading
                <Header.Subheader style={{ color: '#4d4d4d' }}>or running authorization code flow with PKCE</Header.Subheader>
            </Header.Content>
        </Header>
    </Dimmer>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <ReactKeycloakProvider
            authClient={ keycloak }
            initOptions={initOptions}
            LoadingComponent={loadingComponent}
        >
            <Provider store={store}>
                <UserProvider>
                    <ChakraProvider theme={theme}>
                        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                        <App />
                        <Toaster />
                    </ChakraProvider>
                </UserProvider>
            </Provider>
        </ReactKeycloakProvider>

    </React.StrictMode>
);

reportWebVitals();
