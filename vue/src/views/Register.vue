<script>
import login from "./login.vue";

export default {
  name: "Register",
  computed: {
    login() {
      return login
    }
  }
}
</script>

<template>

  <div class="flex h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
      <h2 class="mt-0 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">register in to your account</h2>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-2" @submit="register">

        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">name </label>
          <div class="mt-2">
            <input id="name" name="name" type="text" autocomplete="name" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" v-model="user.name" />
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" v-model="user.email" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>

          </div>
          <div class="mt-2">
            <input id="password" name="password" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" v-model="user.password" />
          </div>
          <div class="flex items-center justify-between mt-">
            <label for="password_confirmation" class="block text-sm font-medium leading-6 text-gray-900"> confirme your Password</label>

          </div>
          <div class="mt-2">
            <input placeholder="password confirmation" id="password_confirmation" name="password_confirmation" type="password" autocomplete="current-password_confirmation" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" v-model="user.password_confirmation"  />

          <div class="text-sm mt-2">
            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
        </div>
        </div>
      </form>

      <p class="mt-2 text-center text-sm text-gray-500">
        are u a member?
        {{ '' }}
        <router-link :to="{name:'login'}" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">login now</router-link>
      </p>
    </div>
  </div>
</template>
<script setup>
import store from '../store';

import {useRouter} from "vue-router";

const router = useRouter();

const user = {
  name: "",
  email: "",
  password: "",
  password_confirmation: "",

};
function register(ev) {
  ev.preventDefault();
  store.dispatch('register', user)
    .then((res) => {
      router.push({ name: 'dashboard' });
    })}


</script>
