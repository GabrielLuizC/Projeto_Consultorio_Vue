<template>
  <div class="container">
    <h1 class="has-text-weight-bold is-size-2 mb-6">Detalhar</h1>

    <div class="is-flex is-justify-content-center">
      <div class="dados is-justify-content-center">
        <h1 class="has-text-weight-bold is-size-2 mb-6">
          {{ secretaria.nome }}
        </h1>
        <div class="field is-horizontal is-justify-content-center mb-3">
          <div class="">
            <p class="has-text-weight-bold is-size-4">Nome</p>
            <p class="is-size-5 mb-3">{{ secretaria.nome }}</p>
          </div>
          <div class="ml-6">
            <p class="has-text-weight-bold is-size-4">Email</p>
            <p class="is-size-5 mb-3">{{ secretaria.email }}</p>
          </div>
          <div class="ml-6">
            <p class="has-text-weight-bold is-size-4">Login</p>
            <p class="is-size-5 mb-3">{{ secretaria.login }}</p>
          </div>
          <div class="ml-6">
            <p class="has-text-weight-bold is-size-4">Nacionalidade</p>
            <p class="is-size-5 mb-3">{{ secretaria.nacionalidade }}</p>
          </div>
        </div>
        <div class="field is-horizontal is-justify-content-center mb-3">
          <div class="">
            <p class="has-text-weight-bold is-size-4">Celular</p>
            <p class="is-size-5 mb-3">{{ secretaria.celular }}</p>
          </div>
          <div class="ml-6">
            <p class="has-text-weight-bold is-size-4">Telefone</p>
            <p class="is-size-5 mb-3">{{ secretaria.telefone }}</p>
          </div>
          <div class="ml-6">
            <p class="has-text-weight-bold is-size-4">Sexo</p>
            <p class="is-size-5 mb-3">{{ secretaria.sexo }}</p>
          </div>
          <div class="ml-6">
            <p class="has-text-weight-bold is-size-4">Sálario</p>
            <p class="is-size-5 mb-3">R$ {{ secretaria.salario }}</p>
          </div>
        </div>
        <div class="field is-horizontal is-justify-content-center">
          <div class="">
            <p class="has-text-weight-bold is-size-4">CPF</p>
            <p class="is-size-5 mb-3">{{ secretaria.cpf }}</p>
          </div>
          <div class="ml-6">
            <p class="has-text-weight-bold is-size-4">RG</p>
            <p class="is-size-5 mb-3">{{ secretaria.rg }}</p>
          </div>
          <div class="ml-6">
            <p class="has-text-weight-bold is-size-4">PIS</p>
            <p class="is-size-5 mb-3">{{ secretaria.pis }}</p>
          </div>
          <div class="ml-6">
            <p class="has-text-weight-bold is-size-4">Data Contratação</p>
            <p class="is-size-5 mb-3">{{ secretaria.dataContratacao }}</p>
          </div>
        </div>
        <i>
          <p class="has-text-weight-bold is-size-4">Status</p>

          <i class="is-size-5" v-if="secretaria.ativo" style="color: limegreen">
            Ativo</i
          >
          <i class="is-size-5" v-if="!secretaria.ativo" style="color: red">
            Inativo</i
          >
        </i>
        <div
          class="bottons is-flex is-flex-direction-column is-align-items-center"
        >
          <button
            class="btn-edit mt-5"
            @click="onClickPaginaEditar(secretaria.id)"
          >
            Editar
          </button>
          <button
            @click="desativarSecretaria(secretaria)"
            class="btn-delet mt-4"
          >
            Desativar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Secretaria } from "@/model/secretaria.model";
import { Notification } from "@/model/notification";
import { SecretariaClient } from "@/client/secretaria.client";
import { Prop } from "vue-property-decorator";
export default class SecretariaFormEditar extends Vue {
  private secretariaClient!: SecretariaClient;
  public secretaria: Secretaria = new Secretaria();
  public notification: Notification = new Notification();
  @Prop({ type: Number, required: false })
  private readonly id!: number;
  @Prop({ type: String, default: false })
  private readonly model!: string;
  public mounted(): void {
    this.secretariaClient = new SecretariaClient();
    this.getSecretaria();
  }
  private getSecretaria(): void {
    this.secretariaClient.findById(this.id).then(
      (sucess) => {
        this.secretaria.id = sucess.id;
        this.secretaria.nome = sucess.nome;
        this.secretaria.telefone = sucess.telefone;
        this.secretaria.celular = sucess.celular;
        this.secretaria.nacionalidade = sucess.nacionalidade;
        this.secretaria.cpf = sucess.cpf;
        this.secretaria.rg = sucess.rg;
        this.secretaria.email = sucess.email;
        this.secretaria.login = sucess.login;
        this.secretaria.senha = sucess.senha;
        this.secretaria.sexo = sucess.sexo;
        this.secretaria.pis = sucess.pis;
        this.secretaria.salario = sucess.salario;
        this.secretaria.dataContratacao = sucess.dataContratacao;
        this.secretaria.ativo = sucess.ativo;
        this.secretaria.cadastro = sucess.cadastro;
        this.secretaria.atualizado = sucess.atualizado;
      },
      (error) => console.log(error)
    );
  }

  public onClickPaginaEditar(idSecretaria: number) {
    this.$router.push({
      name: "editarSecretaria",
      params: { id: idSecretaria, model: "editar" },
    });
  }
  public desativarSecretaria(secretariaDesativar: Secretaria) {
    secretariaDesativar.id = this.secretaria.id;
    secretariaDesativar.nome = this.secretaria.nome;
    secretariaDesativar.ativo = false;
    secretariaDesativar.cadastro = this.secretaria.cadastro;
    secretariaDesativar.atualizado = this.secretaria.atualizado;
    this.secretariaClient.editar(secretariaDesativar);
    this.$router.push({ name: "secretaria" });
  }

  public onClickFecharNotificacao(): void {
    this.notification = new Notification();
  }
  private onClickLimpar(): void {
    this.secretaria = new Secretaria();
  }
}
</script>

<style lang="scss">
@import "~bulma/bulma.sass";
html {
  background-color: #f2f2f2;
}
.dados {
  background-color: white;
  padding: 30px;
  border-radius: 30px;
  box-shadow: 2px 3px 5px rgb(168, 168, 168);
  width: 130vh;
}

.btn-edit {
  font-size: 17px;
  background-color: #00a983;
  border-color: #00a983;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  padding: 10px;
  width: 70%;
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
  width: 70%;
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
</style>
