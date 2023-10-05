import { useEffect } from "react";
import useAuth from "../../hooks/APIs/useAuth.ts";
import { Navigate } from "react-router-dom";

function SignInForm() {
	const { getCurrentUser, signIn } = useAuth();

	useEffect(() => {
		if (!getCurrentUser()) signIn();
	}, [getCurrentUser]);

	if (getCurrentUser()) return <Navigate to="/" />;

	return <p>Redirecting to Keycloak...</p>;
}

export default SignInForm;
