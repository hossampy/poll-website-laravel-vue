<script >
import PageComponent from "@/components/PageComponent.vue";
const title = "suervy "

</script>



<template>
  <PageComponent >
    <template v-slot:header>
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">suervy</h1>

        <router-link
          :to="{ name: 'SurveyCreate' }"
          class="py-2 px-3 text-white bg-emerald-500 rounded-md hover:bg-emerald-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 -mt-1 inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add new Survey
        </router-link>

      </div>

    </template>
</PageComponent>
  <div class="grid grid-cols-1 gap-3 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-10">
      <div v-for="survey in surveys"
          :key="survey.id"
           class="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-200 h-[470px]"
      >
          <img :src="survey.image" class="w-full h-72 object-cover">
          <h4 class="mt-4 text-lg font-bold">{{survey.title}} </h4>
           <div v-html="survey.description" class=" flex-1 overflow-hidden "></div>
        <div  class=" flex-1  justify-between items-center mt-4">
          <router-link :to="{name:'SurveyView',params:{id:survey.id}} " class="py-2 px-6   text-white bg-emerald-500 rounded-md hover:bg-emerald-600">
            Edite
          </router-link>


        </div>


      </div>
  </div>


</template>
<script setup>
import PageComponent from "@/components/PageComponent.vue";
import store from "@/store/index.js";
import {computed} from "vue"
const surveys = computed(()=>store.state.surveys);
</script>





