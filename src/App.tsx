import "./App.css";
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from "react-router-dom";
import SignInForm from "./components/auth-forms/SignInForm.tsx";
import SignOutForm from "./components/auth-forms/SignOutForm.tsx";
import CallbackSignIn from "./components/routing/CallbackSignIn.tsx";
import CallbackSignOut from "./components/routing/CallbackSignOut.tsx";
import PrivateRoutes from "./components/routing/PrivateRoutes.tsx";
import Homepage from "./components/Homepage.tsx";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Navigate to="/react" replace />,
		},
		{
			path: "/login",
			element: <SignInForm />,
		},
		{
			path: "/logout",
			element: <SignOutForm />,
		},
		{
			path: "/callback-sign-in",
			element: <CallbackSignIn />,
		},
		{
			path: "/callback-sign-out",
			element: <CallbackSignOut />,
		},
		{
			element: <PrivateRoutes />,
			children: [
				{
					path: "/react",
					element: <Homepage />,
				},
			],
		},
	]);

	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
