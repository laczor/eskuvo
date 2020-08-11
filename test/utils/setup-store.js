import { Api } from 'src/api';
import { Store } from 'src/store';
import Vuex from 'vuex';

export function setupStore({
	axios = MockAxios(),
	api = Api(axios),
} = {}) {
	const store = Store({ api });
	const vuexStore = new Vuex.Store(store);
	return { store: vuexStore, api, axios };
}

function MockAxios() {
	return {
		get: jest.fn().mockImplementation(notMocked('get')),
		post: jest.fn().mockImplementation(notMocked('post')),
		put: jest.fn().mockImplementation(notMocked('put')),
		delete: jest.fn().mockImplementation(notMocked('delete')),
	};
}

function notMocked(verb) {
	return (...args) => Promise.reject(new Error(`${verb} endpoint is not mocked for ${args}`));
}
