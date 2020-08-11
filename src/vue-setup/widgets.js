import Vue from 'vue';
import VueFocusLock from 'vue-focus-lock';
import CustomWidgets from '../widgets';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
config.autoReplaceSvg = false;
config.observeMutations = false;

Vue.component('vue-focus-lock', VueFocusLock);

Vue.use(CustomWidgets);

