import {createRouter, createWebHistory} from "vue-router";
import dashboard from "@/views/dashboard.vue";
import login from "@/views/login.vue";
import Register from "@/views/Register.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import surveys from "@/views/surveys.vue";
import store from "@/store/index.js";

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
    meta:{ requiresAuth: true },
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
});


router.beforeEach((to,from,next)=>{
  if(to.meta.requiresAuth && !store.state.user.token){
    next ({name:'login'});
  }
  else if(store.state.user.token && (to.name==='login'||to.name==='Register')){
    next({name:'dashboard'})
  }else{
    next();
  }
})


export default router
