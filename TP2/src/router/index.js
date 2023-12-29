import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'
import Equipes from '../views/Equipes.vue'
import DetailsEquipe from '../views/DetailsEquipe.vue'
import Ajout from '../views/Ajout.vue'
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
      path: '/equipes/ajout',
      name: 'ajout',
      component: Ajout
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error',
      component: Error
    }
  ]
})

export default router
