import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const defaultLanguage = 'en';

const br = require('./pt_br.json');
const en = require('./en.json');
const messages = {br, en};

export default new VueI18n({
    locale: defaultLanguage,
    fallbackLocale: defaultLanguage,
    messages: messages
})