import Vue  from 'vue'
import VueRouter  from 'vue-router'
import App  from './App.vue'
import home from './Home.vue'
import contacto from './Contacto'
import restauranteTop from './RestauranteTop'
import restauranteAdd from './RestauranteAdd'
import restaurantesList from './RestaurantesList'
import restaurante from './Restaurante'

Vue.use(VueRouter);
const routes = [
  {path:'/', component: home},
  {path:'/home', component: home},
  {path:'/contacto', component: contacto},
  {path:'/restaurante-destacado/:id', name:'restaurante-destacado', component: restauranteTop},
  {path:'/restaurante/:id', name:'restaurante', component: restaurante},
  {path:'/editar-restaurante/:id', name:'editar-restaurante', component: restauranteTop},
  {path:'/crear-restaurante/', name:'crear-restaurante', component: restauranteAdd},
  {path:'/restaurante-list', name:'restaurante-list', component: restaurantesList},
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.component('home', home);
Vue.component('contacto', contacto);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
