import Vue from 'vue';
import * as prodOptions from 'src/vue-setup';
import { setupStore } from './setup-store';

export function mountComponent(Component, options) {
	const { component, ...context } = createComponent(Component, options);
	const vm = component.$mount();
	return { vm, ...context };
}

export function createComponent(Component, testOptions = {}) {
	const { store, api, axios } = setupStore(testOptions);
	const Constructor = Vue.extend(Component);
	const component = new Constructor({ ...prodOptions, store, ...testOptions });
	return { component, store, api, axios };
}
