import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainChoiceView from '../views/MainChoiceView.vue'
import SymptomChoiceView from '../views/SymptomChoiceView.vue'
import QuestionView from '../views/QuestionView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/main-choice',
      name: 'mainChoice',
      component: MainChoiceView
    },
    {
      path: '/symptom-choice',
      name: 'symptomChoice',
      component: SymptomChoiceView
    },
    {
      path: '/question',
      name: 'question',
      component: QuestionView
    }
    // {
    //   path: '/main-choice',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
