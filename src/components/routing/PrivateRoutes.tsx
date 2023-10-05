import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/APIs/useAuth.ts";

function PrivateRoutes() {
	const { getCurrentUser } = useAuth();

	if (!getCurrentUser()) return <Navigate to="/login" />;

	return <Outlet />;
}

export default PrivateRoutes;
