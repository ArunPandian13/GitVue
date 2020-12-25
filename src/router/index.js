import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import about from "../views/About.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home 
  },
  {
    path: "/about",
    component: about 
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
      
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
