import axios from 'axios';
console.log(process.env.REACT_APP_API_URL,"base URI")
const service = axios.create({
	
	baseURL: `${"base url",process.env.REACT_APP_API_URL}`
});

//enviar el token en cada request que haga el usuario para checkear
service.interceptors.request.use((config) => {
	//buscar el token en el localStorage
	const storedToken = localStorage.getItem('authToken');
	//si el token existe lo añadimos a los headers del request //pasar la autorizacion como string  indicando el tipo de autenticacion. OJO CON LOS ESPACIOS!!
	config.headers = storedToken && { Authorization: `Bearer ${storedToken}` };

	return config;
});

export default service;
