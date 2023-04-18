import { createRouter, createMemoryHistory } from 'vue-router';
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Portfolio from '../views/Portfolio.vue'
import Practice from '../views/Practice.vue'


const NotFound = { template: "<div>Not Found</div>" }
const routes = [
  // {
  //   path: '/',
  //   redirect: { name: 'Home' }
  // },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/About',
    name: 'About',
    component: About,
  },
  {
    path: '/Portfolio',
    name: 'Portfolio',
    component: Portfolio,
  },
  {
    path: '/Practice',
    name: 'Practice',
    component: Practice,
  },
  { path: "/*", component: NotFound },
];

const router = createRouter({
  history: createMemoryHistory(process.env.BASE_URL),
  routes,
});

export default router;
