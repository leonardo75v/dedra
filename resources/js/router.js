import Vue from 'vue';
import VueRouter from 'vue-router';
import main from './components/main';
import contacts from './components/contacts';
import projects from './components/projects';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: '/', component: main},
    { path: '/projects', component: projects},
    { path: '/contacts', component: contacts}
  ],
  mode: 'history'
});


