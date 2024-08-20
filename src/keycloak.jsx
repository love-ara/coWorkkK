import Keycloak from 'keycloak-js';

console.log('Keycloak instance created');

const keycloak = new Keycloak({
    url: 'http://localhost:8080',
    realm: 'COOWORK',
    clientId: 'admin-cli',
});

export default keycloak;
