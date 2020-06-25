import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store';
import i18n from '../plugins/i18n.js';

import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/imprint',
    name: 'imprint',
    component: () => import('../views/Imprint.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/News.vue')
  },
  {
    path: '/members',
    name: 'members',
    component: () => import('../views/Members.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (store.state.language.language && store.state.language.language !== i18n.locale) {
    i18n.locale = store.state.language.language;
    next();
  } else if (!store.state.language.language) {
    store.dispatch('language/setLanguage', navigator.languages)
        .then(() => {
          i18n.locale = store.state.language.language;
          next();
        });
  } else {
    next();
  }
});

export default router
