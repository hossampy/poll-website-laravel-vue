import {createStore} from "vuex";
import axiosClient from "../axios";


const tmpSurveys = [
  {
    id: 100,
    title: "Learning Preferences Survey",
    slug: "learning-preferences",
    status: "draft",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Help us understand your learning preferences by answering a few questions.",
    created_at: "2024-04-12",
    updated_at: "2024-04-12",
    expire_date: "2024-05-12",
    questions: [
      {
        id: 1,
        type: "select",
        question: "Which country are you from?",
        description: "Select the country you currently reside in.",
        options: [
          {uuid: "1", text: "United States"},
          {uuid: "2", text: "United Kingdom"},
          {uuid: "3", text: "Canada"},
          {uuid: "4", text: "Australia"},
          {uuid: "5", text: "Other"}
        ]
      },
      {
        id: 2,
        type: "checkbox",
        question: "What do you want to learn?",
        description: "Select all that apply.",
        options: [
          {uuid: "6", text: "Programming"},
          {uuid: "7", text: "Data Science"},
          {uuid: "8", text: "Web Development"},
          {uuid: "9", text: "Graphic Design"},
          {uuid: "10", text: "Language Learning"},
          {uuid: "11", text: "Other"}
        ]
      },
      {
        id: 3,
        type: "radio",
        question: "How do you prefer to learn?",
        description: "Select your preferred learning method.",
        options: [
          {uuid: "12", text: "Online Courses"},
          {uuid: "13", text: "In-person Classes"},
          {uuid: "14", text: "Self-Study"},
          {uuid: "15", text: "Tutoring"},
          {uuid: "16", text: "Other"}
        ]
      },
      {
        id: 4,
        type: "textarea",
        question: "What challenges do you face in your learning journey?",
        description: "Please provide any specific challenges or obstacles you encounter.",
        placeholder: "Enter your challenges here..."
      },
      {
        id: 5,
        type: "select",
        question: "How did you hear about this survey?",
        description: "Please select the source through which you found this survey.",
        options: [
          {uuid: "17", text: "Social Media"},
          {uuid: "18", text: "Email Newsletter"},
          {uuid: "19", text: "Friend or Colleague"},
          {uuid: "20", text: "Website Search"},
          {uuid: "21", text: "Other"}
        ]
      },
      {
        id: 6,
        type: "checkbox",
        question: "Which platforms do you use for learning?",
        description: "Select all that apply.",
        options: [
          {uuid: "22", text: "Udemy"},
          {uuid: "23", text: "Coursera"},
          {uuid: "24", text: "edX"},
          {uuid: "25", text: "Khan Academy"},
          {uuid: "26", text: "Other"}
        ]
      }
    ]
  },
  {
    id: 200,
    title: "Learning Preferences Survey",
    slug: "learning-preferences",
    status: "draft",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Help us understand your learning preferences by answering a few questions.",
    created_at: "2024-04-12",
    updated_at: "2024-04-12",
    expire_date: "2024-05-12",
    questions: [
      {
        id: 1,
        type: "select",
        question: "Which country are you from?",
        description: "Select the country you currently reside in.",
        options: [
          {uuid: "1", text: "United States"},
          {uuid: "2", text: "United Kingdom"},
          {uuid: "3", text: "Canada"},
          {uuid: "4", text: "Australia"},
          {uuid: "5", text: "Other"}
        ]
      },
      {
        id: 2,
        type: "checkbox",
        question: "What do you want to learn?",
        description: "Select all that apply.",
        options: [
          {uuid: "6", text: "Programming"},
          {uuid: "7", text: "Data Science"},
          {uuid: "8", text: "Web Development"},
          {uuid: "9", text: "Graphic Design"},
          {uuid: "10", text: "Language Learning"},
          {uuid: "11", text: "Other"}
        ]
      },
      {
        id: 3,
        type: "radio",
        question: "How do you prefer to learn?",
        description: "Select your preferred learning method.",
        options: [
          {uuid: "12", text: "Online Courses"},
          {uuid: "13", text: "In-person Classes"},
          {uuid: "14", text: "Self-Study"},
          {uuid: "15", text: "Tutoring"},
          {uuid: "16", text: "Other"}
        ]
      },
      {
        id: 4,
        type: "textarea",
        question: "What challenges do you face in your learning journey?",
        description: "Please provide any specific challenges or obstacles you encounter.",
        placeholder: "Enter your challenges here..."
      },
      {
        id: 5,
        type: "select",
        question: "How did you hear about this survey?",
        description: "Please select the source through which you found this survey.",
        options: [
          {uuid: "17", text: "Social Media"},
          {uuid: "18", text: "Email Newsletter"},
          {uuid: "19", text: "Friend or Colleague"},
          {uuid: "20", text: "Website Search"},
          {uuid: "21", text: "Other"}
        ]
      },
      {
        id: 6,
        type: "checkbox",
        question: "Which platforms do you use for learning?",
        description: "Select all that apply.",
        options: [
          {uuid: "22", text: "Udemy"},
          {uuid: "23", text: "Coursera"},
          {uuid: "24", text: "edX"},
          {uuid: "25", text: "Khan Academy"},
          {uuid: "26", text: "Other"}
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Learning Preferences Survey",
    slug: "learning-preferences",
    status: "draft",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Help us understand your learning preferences by answering a few questions Help us understand your learning preferences by answering a few questions Help us understand your learning preferences by answering a few questions.",
    created_at: "2024-04-12",
    updated_at: "2024-04-12",
    expire_date: "2024-05-12",
    questions: [
      {
        id: 1,
        type: "select",
        question: "Which country are you from?",
        description: "Select the country you currently reside in.",
        options: [
          {uuid: "1", text: "United States"},
          {uuid: "2", text: "United Kingdom"},
          {uuid: "3", text: "Canada"},
          {uuid: "4", text: "Australia"},
          {uuid: "5", text: "Other"}
        ]
      },
      {
        id: 2,
        type: "checkbox",
        question: "What do you want to learn?",
        description: "Select all that apply.",
        options: [
          {uuid: "6", text: "Programming"},
          {uuid: "7", text: "Data Science"},
          {uuid: "8", text: "Web Development"},
          {uuid: "9", text: "Graphic Design"},
          {uuid: "10", text: "Language Learning"},
          {uuid: "11", text: "Other"}
        ]
      },
      {
        id: 3,
        type: "radio",
        question: "How do you prefer to learn?",
        description: "Select your preferred learning method.",
        options: [
          {uuid: "12", text: "Online Courses"},
          {uuid: "13", text: "In-person Classes"},
          {uuid: "14", text: "Self-Study"},
          {uuid: "15", text: "Tutoring"},
          {uuid: "16", text: "Other"}
        ]
      },
      {
        id: 4,
        type: "textarea",
        question: "What challenges do you face in your learning journey?",
        description: "Please provide any specific challenges or obstacles you encounter.",
        placeholder: "Enter your challenges here..."
      },
      {
        id: 5,
        type: "select",
        question: "How did you hear about this survey?",
        description: "Please select the source through which you found this survey.",
        options: [
          {uuid: "17", text: "Social Media"},
          {uuid: "18", text: "Email Newsletter"},
          {uuid: "19", text: "Friend or Colleague"},
          {uuid: "20", text: "Website Search"},
          {uuid: "21", text: "Other"}
        ]
      },
      {
        id: 6,
        type: "checkbox",
        question: "Which platforms do you use for learning?",
        description: "Select all that apply.",
        options: [
          {uuid: "22", text: "Udemy"},
          {uuid: "23", text: "Coursera"},
          {uuid: "24", text: "edX"},
          {uuid: "25", text: "Khan Academy"},
          {uuid: "26", text: "Other"}
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Learning Preferences Survey",
    slug: "learning-preferences",
    status: "draft",
    image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Help us understand your learning preferences by answering a few questions.",
    created_at: "2024-04-12",
    updated_at: "2024-04-12",
    expire_date: "2024-05-12",
    questions: [
      {
        id: 1,
        type: "select",
        question: "Which country are you from?",
        description: "Select the country you currently reside in.",
        options: [
          {uuid: "1", text: "United States"},
          {uuid: "2", text: "United Kingdom"},
          {uuid: "3", text: "Canada"},
          {uuid: "4", text: "Australia"},
          {uuid: "5", text: "Other"}
        ]
      },
      {
        id: 2,
        type: "checkbox",
        question: "What do you want to learn?",
        description: "Select all that apply.",
        options: [
          {uuid: "6", text: "Programming"},
          {uuid: "7", text: "Data Science"},
          {uuid: "8", text: "Web Development"},
          {uuid: "9", text: "Graphic Design"},
          {uuid: "10", text: "Language Learning"},
          {uuid: "11", text: "Other"}
        ]
      },
      {
        id: 3,
        type: "radio",
        question: "How do you prefer to learn?",
        description: "Select your preferred learning method.",
        options: [
          {uuid: "12", text: "Online Courses"},
          {uuid: "13", text: "In-person Classes"},
          {uuid: "14", text: "Self-Study"},
          {uuid: "15", text: "Tutoring"},
          {uuid: "16", text: "Other"}
        ]
      },
      {
        id: 4,
        type: "textarea",
        question: "What challenges do you face in your learning journey?",
        description: "Please provide any specific challenges or obstacles you encounter.",
        placeholder: "Enter your challenges here..."
      },
      {
        id: 5,
        type: "select",
        question: "How did you hear about this survey?",
        description: "Please select the source through which you found this survey.",
        options: [
          {uuid: "17", text: "Social Media"},
          {uuid: "18", text: "Email Newsletter"},
          {uuid: "19", text: "Friend or Colleague"},
          {uuid: "20", text: "Website Search"},
          {uuid: "21", text: "Other"}
        ]
      },
      {
        id: 6,
        type: "checkbox",
        question: "Which platforms do you use for learning?",
        description: "Select all that apply.",
        options: [
          {uuid: "22", text: "Udemy"},
          {uuid: "23", text: "Coursera"},
          {uuid: "24", text: "edX"},
          {uuid: "25", text: "Khan Academy"},
          {uuid: "26", text: "Other"}
        ]
      }
    ]
  }
];

const store = createStore({
  state:{
    user:{
      data:{
       /* name: 'Tom Cook',
        email: 'tom@example.com',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
     */ },
      token: sessionStorage.getItem("TOKEN" ),

    },
   surveys : [...tmpSurveys],
  },
  getters:{},
  actions:{
    register({commit}, user) {
      return axiosClient.post('/register', user)
        .then(({data}) => {
          commit('setUser', data.user);
          commit('setToken', data.token)
          return data;
        })
    },
    login({commit}, user) {
      return axiosClient.post('/login', user)
        .then(({data}) => {
          commit('setUser', data.user);
          commit('setToken', data.token)
          return data;
        })
    },



  },
  mutations:{
    logout: (state)=>{
      state.user.token=null;
      state.user.data={};
      sessionStorage.removeItem("TOKEN")
   },
    setUser: (state, user) => {
      state.user.data = user;
    },
    setToken: (state, token) => {
      state.user.token = token;
      sessionStorage.setItem("TOKEN", token);
    },
  },
  modules:{
  }


})
export default store;
