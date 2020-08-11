import Vue from 'vue';
import VueI18n from 'vue-i18n';

import en from '../resources/en-us';

Vue.use(VueI18n);

export const i18n = new VueI18n({
	locale: 'en',
	fallbackLocale: 'en',
	messages: { en },
});

export async function fetchTranslations({
	locale,
	languageCode = locale,
}) {
	const translation = await import(/* webpackChunkName: "lang-[request]" */ `src/resources/${locale}`);
	i18n.setLocaleMessage(languageCode, translation.default);
}
