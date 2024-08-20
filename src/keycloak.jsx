// src/keycloak.js
import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: 'http://localhost:8080',
    realm: 'COOWORK',
    clientId: 'admin-cli',
});

export default keycloak;
