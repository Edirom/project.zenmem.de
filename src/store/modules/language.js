import Vue from 'vue';
import VueLocalStorage from 'vue-localstorage';
import Languages from '../../translations';

Vue.use(VueLocalStorage);
const supportedLanguages = Object.getOwnPropertyNames(Languages);

export default {
    namespaced: true,
    state: {
        language: Vue.localStorage.get('language'),
    },
    mutations: {
        SET_LANGUAGE(state, lang) {
            Vue.localStorage.set('language', lang);
            state.language = lang;
        },
    },
    actions: {
        setLanguage({ commit }, languages) {
            if (typeof languages === 'string') {
                commit('SET_LANGUAGE', languages);
            } else {

                var language = 'en';
                languages.some(function (l) {
                    if(l.length > 2)
                        l = l.substring(0, 2);

                    const lang = supportedLanguages.find(sl => {
                        return sl === l;
                    });

                    if(typeof lang === 'string') {
                        language = lang;
                        return true;
                    }

                    return false;
                });

                commit('SET_LANGUAGE', language);
            }
        },
    },
};