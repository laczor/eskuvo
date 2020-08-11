import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{ path: '/', component: () => import(/* webpackChunkName: "the-app" */ '../the-app') },
];

export const router = new VueRouter({
	routes,
	mode: 'history',
	base: process.env.PUBLIC_PATH,
});
