import './style/main.scss';

import Vue from 'vue';
import * as vueSetup from './vue-setup';

new Vue({ el: '#app', render: h => h('router-view'), ...vueSetup });
