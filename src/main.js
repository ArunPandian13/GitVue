import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import jquery from 'jquery';
import Datatablecell from './components/datatable/datatable-cell';
import Datatable from './components/datatable/';



createApp(App)
  .use(store)
  .use(router)
  .use(jquery)
  .component('Datatable',Datatable)
  .component('Datatablecell',Datatablecell)
  .mount("#app");
