import Vuex from 'vuex';
import Vue from 'vue';
import { Store } from '../store';
import { Api } from '../api';

Vue.use(Vuex);

export const store = VuexStore();

export function VuexStore({
	api = Api(),
	strict = process.env.NODE_ENV !== 'production',
} = {}) {
	return new Vuex.Store({ ...Store({ api }), strict });
}
