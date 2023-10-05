import { UserManager, WebStorageStateStore } from "oidc-client-ts";

const port = import.meta.env.VITE_KEYCLOAK_PORT;
const realm = import.meta.env.VITE_KEYCLOAK_REALM_NAME;
const currentIssuer = `${port}/realms/${realm}`;

export default new UserManager({
	authority: port,
	scope: "openid",
	metadata: {
		issuer: currentIssuer,
		authorization_endpoint: `${currentIssuer}/protocol/openid-connect/auth`,
		registration_endpoint: `${currentIssuer}/login-actions/registration`,
		token_endpoint: `${currentIssuer}/protocol/openid-connect/token`,
		introspection_endpoint: `${currentIssuer}/protocol/openid-connect/token/introspect`,
		userinfo_endpoint: `${currentIssuer}/protocol/openid-connect/userinfo`,
		end_session_endpoint: `${currentIssuer}/protocol/openid-connect/logout`,
		jwks_uri: `${currentIssuer}/protocol/openid-connect/certs`,
		check_session_iframe: `${currentIssuer}/protocol/openid-connect/login-status-iframe.html`,
	},
	client_id: import.meta.env.VITE_KEYCLOAK_CLIENT_ID,
	redirect_uri: import.meta.env.VITE_KEYCLOAK_REDIRECT_URI,
	post_logout_redirect_uri: import.meta.env
		.VITE_KEYCLOAK_POST_LOGOUT_REDIRECT_URI,
	userStore: new WebStorageStateStore({ store: window.localStorage }),
});
