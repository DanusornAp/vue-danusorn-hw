import {
  createRouter,
  createWebHistory,
} from 'vue-router/dist/vue-router.esm-bundler';
import main from './pages/main.vue';
import contact from './pages/contact.vue';

const routes = [
  { path: '/', name: 'home', component: main },
  { path: '/contact', name: 'contact', component: contact },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
