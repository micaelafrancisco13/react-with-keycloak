import { useEffect } from "react";
import useAuth from "../../hooks/APIs/useAuth.ts";

function CallbackSignOut() {
	const { signOutCallback } = useAuth();

	useEffect(() => {
		signOutCallback();
	}, []);

	return <p>Signing out...</p>;
}

export default CallbackSignOut;
