<template>
  <h1 class="has-text-weight-bold is-size-2 mb-5">Consulta de Convênio</h1>
  <div
    class="buttons is-flex is-flex-direction-column is-justify-content-space-around m-2"
  >
    <router-link class="btn-cad" to="/convenio/cadastrar"
      ><button class="btn-cadastrar mb-4">
        Cadastrar Convênio
      </button></router-link
    >
    <button class="btn-search mb-1">Buscar Convênio</button>
  </div>
  <div class="list is-flex is-justify-content-center">
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Dt.</th>
          <th>ID</th>
          <th>Status</th>
          <th>Nome</th>
          <th>Valor R$</th>
          <th>Editar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in convenioList" :key="item.id">
          <th>
            <button @click="onClickPaginaDetalhar(item.id)" class="btn-detail">
              i
            </button>
          </th>
          <th>{{ item.id }}</th>

          <th>
            <span v-if="item.ativo" class="tag is-success"> Ativo </span>
            <span v-if="!item.ativo" class="tag is-danger"> Inativo </span>
          </th>

          <th>{{ item.nome }}</th>
          <th>{{ item.valor }}</th>
          <td>
            <button class="btn-edit" @click="onClickPaginaEditar(item.id)">
              Editar
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

import { PageRequest } from "@/model/page/page-request";
import { PageResponse } from "@/model/page/page-response";

import { ConvenioClient } from "@/client/convenio.client";
import { Convenio } from "@/model/convenio.model";

export default class ConvenioList extends Vue {
  private pageRequest: PageRequest = new PageRequest();
  private pageResponse: PageResponse<Convenio> = new PageResponse();
  public convenioList: Convenio[] = [];
  public convenio: Convenio = new Convenio();
  private convenioClient!: ConvenioClient;
  public mounted(): void {
    this.convenioClient = new ConvenioClient();
    this.listarConvenio();
  }
  private listarConvenio(): void {
    this.convenioClient.findByFiltrosPaginado(this.pageRequest).then(
      (success) => {
        this.pageResponse = success;
        this.convenioList = this.pageResponse.content;
      },
      (error) => console.log(error)
    );
  }

  public onClickPaginaDetalhar(idConvenio: number) {
    this.$router.push({
      name: "detalharConvenio",
      params: { id: idConvenio, model: "detalhar" },
    });
  }

  public onClickPaginaEditar(idConvenio: number) {
    this.$router.push({
      name: "editarConvenio",
      params: { id: idConvenio, model: "editar" },
    });
  }
}
</script>

<style scoped lang="scss">
html {
  background-color: #f2f2f2;
}
.table {
  background-color: #f2f2f2;
  margin-top: 30px;
  font-size: 20px;
}

.table th {
  padding: 15px;
  text-align: center;
}

.table td {
  padding: 15px;
  text-align: center;
}

.btn-cad {
  width: 100%;
}

.btn-cadastrar {
  width: 60%;
  font-size: 30px;
  background-color: #0074ff;
  border-color: #0074ff;
  border-radius: 20px;
  border-width: 5px;
  color: white;
  font-weight: bold;
  padding: 10px;
}

.btn-cadastrar:hover {
  background-color: #00aeff;
  transform: translate(-1px, -1px);
  transition: 1s;
  border-color: #00aeff;
  border-width: 5px;
  color: white;
  font-weight: bold;
  box-shadow: 2px 5px 10px #a7a7a7;
}

.btn-search {
  width: 60%;
  font-size: 30px;
  background-color: #001780;
  border-color: #001780;
  border-radius: 20px;
  border-width: 5px;
  color: white;
  font-weight: bold;
  padding: 10px;
}

.btn-search:hover {
  background-color: #0022bd;
  transform: translate(-1px, -1px);
  transition: 1s;
  border-color: #0022bd;
  border-width: 5px;
  color: white;
  font-weight: bold;
  box-shadow: 2px 5px 10px #a7a7a7;
}

.btn-edit {
  font-size: 17px;
  background-color: #00a983;
  border-color: #00a983;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  padding: 10px;
}

.btn-edit:hover {
  background-color: #00cb9d;
  transform: translate(-1px, -1px);
  transition: 1s;
  border-color: #00cb9d;
  color: white;
  font-weight: bold;
  box-shadow: 2px 5px 10px #a7a7a7;
}

.btn-delet {
  font-size: 17px;
  background-color: #b20000;
  border-color: #b20000;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  padding: 10px;
}

.btn-delet:hover {
  background-color: #cd0000;
  transform: translate(-1px, -1px);
  transition: 1s;
  border-color: #cd0000;
  color: white;
  font-weight: bold;
  box-shadow: 2px 5px 10px #a7a7a7;
}

.btn-detail {
  font-size: 17px;
  background-color: #f2f2f2;
  border-color: #0093ff;
  border-width: 3px;
  border-radius: 100px;
  color: #0093ff;
  font-weight: bold;
  width: 30px;
}

.btn-detail:hover {
  background-color: #f2f2f2;
  transform: translate(-1px, -1px);
  transition: 1s;
  border-color: #00c1ff;
  color: #00c1ff;
  font-weight: bold;
  box-shadow: 2px 5px 10px #a7a7a7;
}
</style>
