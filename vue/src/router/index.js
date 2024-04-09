import {createRouter, createWebHistory} from "vue-router";
import dashboard from "@/views/dashboard.vue";
import login from "@/views/login.vue";
import Register from "@/views/Register.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import surveys from "@/views/surveys.vue";

const routes =[
  {
    path :'/login',
    name : 'login',
    component : login,
  },
  {
    path :'/Register',
    name : 'Register',
    component : Register,
  },
  {
    path :'/',
    redirect:'/dashboard',
    component : DefaultLayout,
    children:[
      {
        path :'/dashboard',
        name : 'dashboard',
        component : dashboard,
      },
      {
        path :'/survey',
        name : 'survey',
        component : surveys,
      },

    ]
  }

];
const  router = createRouter({
  history:createWebHistory(),
  routes
})
export default router
