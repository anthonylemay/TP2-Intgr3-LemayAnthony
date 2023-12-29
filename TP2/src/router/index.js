import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Equipes from '../views/Equipes.vue'
import DetailsEquipe from '../views/Details-equipe.vue'
import Error from '../views/Error.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component: Accueil
    },
    {
      path: '/equipes',
      name: 'equipes',
      component: Equipes
    },
    {
      path: '/equipes/:id',
      name: 'equipe',
      component: DetailsEquipe
    },
    {
      path: '/:pathMatch(.*)',
      name: 'error',
      component: Error
    }
  ]
})

export default router
