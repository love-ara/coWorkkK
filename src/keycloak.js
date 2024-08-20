import Keycloak from "./keycloak";


const keycloakConfig = {
        url: "http://localhost:8080",
        realm: "COOWORK",
        clientId: "admin-cli"
    };

const keycloak = new Keycloak(keycloakConfig);






export default keycloak;
