<template>
  <div class="cad-form mt-5">
    <h1 class="has-text-weight-bold is-size-2 mb-6">
      Editar de Especialidades
    </h1>
    <div class="columns" v-if="notification.ativo">
      <div class="column is-12">
        <div :class="notification.classe">
          <button @click="onClickFecharNotificacao()" class="delete"></button>
          {{ notification.mensagem }}
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="check column is-12 is-size-3">
        <label class="checkbox label">
          <input v-model="especialidade.ativo" checked type="checkbox" />
          Ativar Especialidade
        </label>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <p class="control is-expanded has-icons-left">
            <input
              class="input"
              type="text"
              v-model="especialidade.nome"
              placeholder="Nome"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </p>
        </div>
      </div>
    </div>

    <div class="field">
      <p class="control">
        <button class="btn-cadastrar" @click="onClickEditar()">
          Confirmar Edição
        </button>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { Especialidade } from "@/model/especialidade.model";
import { Notification } from "@/model/notification";
import { EspecialidadeClient } from "@/client/especialidade.client";
import { Prop } from "vue-property-decorator";

export default class EspecialidadeFormEditar extends Vue {
  private especialidadeClient!: EspecialidadeClient;
  public especialidade: Especialidade = new Especialidade();
  public notification: Notification = new Notification();

  @Prop({ type: Number, required: false })
  private readonly id!: number;
  @Prop({ type: String, default: false })
  private readonly model!: string;

  public mounted(): void {
    this.especialidadeClient = new EspecialidadeClient();
    this.getEspecialidade();
  }

  private getEspecialidade(): void {
    this.especialidadeClient.findById(this.id).then(
      (sucess) => {
        this.especialidade.id = sucess.id;
        this.especialidade.nome = sucess.nome;
        this.especialidade.ativo = sucess.ativo;
        this.especialidade.cadastro = sucess.cadastro;
        this.especialidade.atualizado = sucess.atualizado;
      },
      (error) => console.log(error)
    );
  }

  public onClickEditar(): void {
    this.especialidadeClient.editar(this.especialidade).then(
      (success) => {
        this.notification = this.notification.new(
          true,
          "notification is-success",
          "Especialidade Editada com sucesso!!!"
        );
        this.onClickLimpar();
      },
      (error) => {
        this.notification = this.notification.new(
          true,
          "notification is-danger",
          "Error: " + error
        );
        this.onClickLimpar();
      }
    );
  }
  public onClickFecharNotificacao(): void {
    this.notification = new Notification();
  }
  private onClickLimpar(): void {
    this.especialidade = new Especialidade();
  }
}
</script>

<style lang="scss">
html {
  background-color: #f2f2f2;
}

.cad-form {
  width: 100%;
  padding-left: 250px;
  padding-right: 250px;
}

.btn-cadastrar {
  width: 70%;
  font-size: 20px;
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
</style>
