import axios, { CanceledError } from "axios";

const instance = axios.create({});

instance.interceptors.response.use(null, (error) => {
	const expectedError =
		error.response &&
		error.response.status >= 400 &&
		error.response.status < 500;

	if (!expectedError) {
		console.log("Intercepted error", expectedError);
	}

	return Promise.reject(error);
});

function setJwt(jwt: string | null) {
	instance.defaults.headers.common["Authorization"] = jwt;
}

export default instance;
export { CanceledError, setJwt };
