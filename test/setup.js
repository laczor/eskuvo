import 'src/vue-setup';
import Vue from 'vue';

setupForJsdom();

function setupForJsdom() {
	const div = { functional: true, render: (h, { data, children }) => h('div', data, children) };
	Vue.component('transition', div);
	Vue.component('transition-group', div);

	Vue.component('vue-focus-lock', div);
}
