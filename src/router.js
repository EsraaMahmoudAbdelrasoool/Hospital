import Vue from "vue";
import Router from "vue-router";
import ArrivingList from "./views/ArrivingList.vue";
import AddNewArrivingMethod from "./views/AddNewArrivingMethod.vue";



Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/ArrivingList",
      name: "ArrivingList",
      component: ArrivingList
    },
    {
      path: "/AddNewArrivingMethod",
      name: "AddNewArrivingMethod",
      component: AddNewArrivingMethod
    },
    
  
  ],
  mode: "history",

});


export default router;
