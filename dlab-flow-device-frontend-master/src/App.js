import { ReactKeycloakProvider } from '@react-keycloak/web';
import Keycloak from 'keycloak-js';
import { baseURL } from './configs/Constants';
import { setCookie } from './utils/cookie';
import AppRouter from '../src/routes/index';


// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const keycloak = new Keycloak({
    url: baseURL.KEYCLOAK_URL,
    realm: baseURL.KEYCLOAK_REALM,
    clientId: baseURL.KEYCLOAK_CLIENT_ID
});

const onKeycloakTokens = (tokens) => {
    console.log('onKeycloakTokens', tokens);
    // setCookie('token', tokens.token);
};
const App = () => {
    return (
        <ReactKeycloakProvider
            authClient={keycloak}
            initOptions={{
                onLoad: 'login-required'
                // checkLoginIframe: false,
                // scope: 'offline_access'
            }}
            onTokens={onKeycloakTokens}
        >
            <div className="App">
                <AppRouter/>
            </div>
        </ReactKeycloakProvider>
    );
};

export default App;


