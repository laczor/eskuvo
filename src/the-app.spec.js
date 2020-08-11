import Vue from 'vue';
import * as setup from 'src/vue-setup';
import App from './the-app';

test('displays in English by default', async () => {
	const vm = mount();
	expect(vm.$i18n.locale).toBe('en');
});


function mount(overrides) {
	const Constructor = Vue.extend(App);
	return new Constructor({ ...setup, ...overrides }).$mount();
}
