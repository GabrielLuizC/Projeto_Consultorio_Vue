import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import("../views/HomeView.vue")
  },
  {
    path: '/convenio',
    name: 'convenio',
    component: () => import("../views/Convenio/ConvenioView.vue")
  },
  {
    path: '/convenio/cadastrar',
    name: 'formCadastrarConvenio',
    component: () => import("../views/Convenio/ConvenioCadastrarView.vue")
  },
  {
    path: '/convenio/formulario/:model/:id',
    name: 'detalharConvenio',
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () => import("../views/Convenio/ConvenioDetalharView.vue")
  },
  {
    path: '/convenio/formulario/:model/:id',
    name: 'editarConvenio',
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () => import("../views/Convenio/ConvenioEditarView.vue")
  },
  {
    path: '/especialidade',
    name: 'especialidade',
    component: () => import("../views/Especialidade/EspecialidadeView.vue")
  },
  {
    path: '/especialidade/cadastrar',
    name: 'cadastrarEspecialidade',
    component: () => import("../views/Especialidade/EspecialidadeCadastrarView.vue")
  },
  {
    path: '/especialidade/formulario/:model/:id',
    name: 'detalharEspecialidade',
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () => import("../views/Especialidade/EspecialidadeDetalharView.vue")
  },
  {
    path: '/especialidade/formulario/:model/:id',
    name: 'editarEspecialidade',
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () => import("../views/Especialidade/EspecialidadeEditarView.vue")
  },
  {
    path: '/medico',
    name: 'medico',
    component: () => import("../views/medico/MedicoList.vue")
  },
  {
    path: '/medico/cadastrar',
    name: 'cadastrarMedico',
    component: () => import("../views/medico/FormCadastrarMedico.vue")
  },
  {
    path: '/medico/detalhar',
    name: 'detalharMedico',
    component: () => import("../views/medico/FormDetalharMedico.vue")
  },
  {
    path: '/medico/formulario/:model/:id',
    name: 'detalharMedico',
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () => import("../views/medico/FormDetalharMedico.vue")
  },
  {
    path: '/medico/formulario/:model/:id',
    name: 'editarMedico',
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () => import("../views/medico/FormEditarMedico.vue")
  },
  {
    path: '/paciente',
    name: 'paciente',
    component: () => import("../views/paciente/PacienteList.vue")
  },
  {
    path: '/paciente/cadastrar',
    name: 'cadastrarPaciente',
    component: () => import("../views/paciente/FormCadastrarPaciente.vue")
  },
  {
    path: '/paciente/detalhar',
    name: 'detalharPaciente',
    component: () => import("../views/paciente/FormDetalharPaciente.vue")
  },
  {
    path: '/paciente/formulario/:model/:id',
    name: 'detalharPaciente',
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () => import("../views/paciente/FormDetalharPaciente.vue")
  },
  {
    path: '/paciente/formulario/:model/:id',
    name: 'editarPaciente',
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () => import("../views/paciente/FormEditarPaciente.vue")
  },
  {
    path: '/secretaria',
    name: 'secretaria',
    component: () => import("../views/Secretaria/SecretariaView.vue")
  },
  {
    path: '/secretaria/cadastrar',
    name: 'cadastrarSecretaria',
    component: () => import("../views/Secretaria/SecretariaCadastrarView.vue")
  },
  {
    path: '/secretaria/formulario/:model/:id',
    name: 'detalharSecretaria',
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () => import("../views/Secretaria/SecretariaDetalharView.vue")
  },
  {
    path: '/secretaria/formulario/:model/:id',
    name: 'editarSecretaria',
    props: (router) => ({ id: router.params.id, model: router.params.model }),
    component: () => import("../views/Secretaria/SecretariaEditarView.vue")
  },
  {
    path: '/agenda',
    name: 'agenda',
    component: () => import("../views/agenda/AgendaView.vue")
  },
  {
    path: '/historico',
    name: 'historico',
    component: () => import("../views/historico/HistoricoView.vue")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
