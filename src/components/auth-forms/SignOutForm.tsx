import { useEffect } from "react";
import useAuth from "../../hooks/APIs/useAuth.ts";

function SignOutForm() {
	const { signOut } = useAuth();

	useEffect(() => {
		signOut();

		window.location.assign("/");
	}, []);

	return null;
}

export default SignOutForm;
