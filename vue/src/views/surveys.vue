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
        <div  class=" flex-1  justify-between items-center mt-4 ">
          <router-link :to="{name:'SurveyView',params:{id:survey.id}} " class="py-2 px-6 items-center justify-center    text-white bg-emerald-500 rounded-md hover:bg-emerald-600" >

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 inline-block">
              <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
            </svg>


            Edite

          </router-link>
          <button
            v-if="survey.id"
            @click="deleteSurvey(survey)"
            type="button"
            class="py-2 px-3  sm:mx-10 text-white bg-red-500 rounded-md hover:bg-red-600 items-center md:mx-10 justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 -mt-1 inline-block"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clip-rule="evenodd"
              />
            </svg>
            Delete
          </button>

        </div>


      </div>
  </div>


</template>
<script setup>
import PageComponent from "@/components/PageComponent.vue";
import store from "@/store/index.js";
import {computed} from "vue"
const surveys = computed(()=>store.state.surveys);

function deleteSurvey(survey) {
  if (
    confirm(
      `Are you sure you want to delete this survey? Operation can't be undone!!`
    )
  ) {

  }
}
</script>





