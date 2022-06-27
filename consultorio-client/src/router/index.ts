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
    component: () => import('../views/Agendamentos/AgendamentosView.vue')
  },
  {
    path: '/historico',
    name: 'historico',
    component: () => import('../views/Historico/HistoricoView.vue')
  },
  {
    path: '/pacientes',
    name: 'pacientes',
    component: () => import('../views/Paciente/PacienteView.vue')
  },
  {
    path: '/pacientes/editar',
    name: 'pacientes-editar',
    component: () => import('../views/Paciente/PacienteEditView.vue')
  },
  {
    path: '/pacientes/cadastrar',
    name: 'pacientes-cadastrar',
    component: () => import('../views/Paciente/PacienteCadastrarView.vue')
  },
  {
    path: '/pacientes/desativar',
    name: 'pacientes-desativar',
    component: () => import('../views/Paciente/PacienteDesativarView.vue')
  },
  {
    path: '/secretarias',
    name: 'secretarias',
    component: () => import('../views/Secretaria/SecretariaView.vue')
  },
  {
    path: '/secretarias/cadastrar',
    name: 'secretarias-cadastrar',
    component: () => import('../views/Secretaria/SecretariaCadastrarView.vue')
  },
  {
    path: '/secretarias/editar',
    name: 'secretarias-editar',
    component: () => import('../views/Secretaria/SecretariaEditView.vue')
  },
  {
    path: '/secretarias/desativar',
    name: 'secretarias-desativar',
    component: () => import('../views/Secretaria/SecretariaDesativarView.vue')
  },
  {
    path: '/medicos',
    name: 'medicos',
    component: () => import('../views/Medico/MedicoView.vue')
  },
  {
    path: '/medicos/cadastrar',
    name: 'medicos-cadastrar',
    component: () => import('../views/Medico/MedicoCadastrarView.vue')
  },
  {
    path: '/medicos/editar',
    name: 'medicos-editar',
    component: () => import('../views/Medico/MedicoEditView.vue')
  },
  {
    path: '/medicos/desativar',
    name: 'medicos-desativar',
    component: () => import('../views/Medico/MedicoDesativarView.vue')
  },
  {
    path: '/especialidade',
    name: 'especialidade',
    component: () => import('../views/Especialidade/EspecialidadeView.vue')
  },
  {
    path: '/especialidade/cadastrar',
    name: 'especialidade-cadastrar',
    component: () => import('../views/Especialidade/EspecialidadeCadastrarView.vue')
  },
  {
    path: '/especialidade/editar',
    name: 'especialidade-editar',
    component: () => import('../views/Especialidade/EspecialidadeEditView.vue')
  },
  {
    path: '/especialidade/desativar',
    name: 'especialidade-desativar',
    component: () => import('../views/Especialidade/EspecialidadeDesativarView.vue')
  },
  {
    path: '/convenio',
    name: 'convenio',
    component: () => import('../views/Convenio/ConvenioView.vue')
  },
  {
    path: '/convenio/cadastrar',
    name: 'convenio-cadastrar',
    component: () => import('../views/Convenio/ConvenioCadastrarView.vue')
  },
  {
    path: '/convenio/editar',
    name: 'convenio-editar',
    component: () => import('../views/Convenio/ConvenioEditView.vue')
  },
  {
    path: '/convenio/desativar',
    name: 'convenio-desativar',
    component: () => import('../views/Convenio/ConvenioDesativarView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
