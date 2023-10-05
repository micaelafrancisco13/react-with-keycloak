import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/APIs/useAuth.ts";

function CallbackSignIn() {
	const { signInCallback, getCurrentUser } = useAuth();

	useEffect(() => {
		signInCallback();
	}, []);

	if (getCurrentUser()) return <Navigate to="/" />;

	return <p>Processing authentication with Keycloak...</p>;
}

export default CallbackSignIn;
