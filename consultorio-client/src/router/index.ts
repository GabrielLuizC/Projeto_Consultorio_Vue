import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import ('../views/MenuView.vue')
  },
  {
    path: '/agendamentos',
    name: 'agendamentos',
    component: () => import('../views/AgendamentosView.vue')
  },
  {
    path: '/historico',
    name: 'historico',
    component: () => import('../views/HistoricoView.vue')
  },
  {
    path: '/pacientes',
    name: 'pacientes',
    component: () => import('../views/PacienteView.vue')
  },
  {
    path: '/secretarias',
    name: 'secretarias',
    component: () => import('../views/SecretariaView.vue')
  },
  {
    path: '/medicos',
    name: 'medicos',
    component: () => import('../views/MedicoView.vue')
  },
  {
    path: '/especializacao',
    name: 'especializacao',
    component: () => import('../views/EspecializacaoView.vue')
  },
  {
    path: '/convenio',
    name: 'convenio',
    component: () => import('../views/ConvenioView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
