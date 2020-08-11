import axios from 'axios';

export function Api({ get } = Axios()) { // eslint-disable-line no-unused-vars
	return {
	};
}

function Axios() {
	return axios.create({ baseURL: process.env.API_PATH });
}
