import Fieldset from 'primevue/fieldset';
Vue.component('Fieldset', Fieldset);

import Vue from "vue";
import Button from 'primevue/button';
Vue.component('Button', Button);

import App from "./App.vue";
import router from "./router";

import DataTable from "primevue/datatable";
Vue.component('DataTable', DataTable);

import Column from "primevue/column";
Vue.component('Column', Column);
 

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");



import ConfirmationService from 'primevue/confirmationservice';
Vue.use(ConfirmationService);

import PrimeVue from 'primevue/config';

Vue.use(PrimeVue);

import Dialog from 'primevue/dialog';

Vue.component('Dialog', Dialog);
import ConfirmPopup from 'primevue/confirmpopup';
Vue.component('ConfirmPopup', ConfirmPopup);


import Toast from 'primevue/toast';
Vue.component('Toast', Toast);

import axios from "axios";
Vue.use(axios);


import vueSimpleAlert from "vue-simple-alert";
Vue.use(vueSimpleAlert);