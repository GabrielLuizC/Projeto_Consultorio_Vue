<template>
  <div class="cad-form mt-5">
    <h1 class="has-text-weight-bold is-size-2 mb-6">Editar Secretaria</h1>
    <div class="columns" v-if="notification.ativo">
      <div class="column is-12">
        <div :class="notification.classe">
          <button @click="onClickFecharNotificacao()" class="delete"></button>
          {{ notification.mensagem }}
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column is-12 is-size-3">
        <label class="label">
          <input v-model="secretaria.ativo" checked type="checkbox" />
          Ativar Secretária
        </label>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <p class="control is-expanded has-icons-left">
            <input
              class="input"
              v-model="secretaria.nome"
              type="text"
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
      <div class="field">
        <p class="control is-expanded has-icons-left has-icons-right">
          <input
            class="input is-success"
            v-model="secretaria.email"
            type="email"
            placeholder="Email"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </p>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <p class="control is-expanded has-icons-left">
            <input
              class="input"
              type="number"
              v-model="secretaria.celular"
              placeholder="Celular"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control is-expanded has-icons-left has-icons-right">
            <input
              class="input"
              type="number"
              v-model="secretaria.telefone"
              placeholder="Telefone"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </p>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <p class="control is-expanded has-icons-left">
            <input
              class="input"
              type="number"
              v-model="secretaria.cpf"
              placeholder="CPF"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control is-expanded has-icons-left has-icons-right">
            <input
              class="input"
              type="number"
              v-model="secretaria.rg"
              placeholder="RG"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </p>
        </div>
      </div>
    </div>

    <div class="field is-flex is-justify-content-center is-align-items-center">
      <p class="help has-text-weight-bold is-size-6 mr-3">Sexo</p>
      <div class="control">
        <div class="select">
          <select class="is-hovered" v-model="secretaria.sexo">
            <option>masculino</option>
            <option>feminino</option>
            <option>outro</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <p class="control has-icons-left">
        <input
          class="input"
          type="text"
          v-model="secretaria.nacionalidade"
          placeholder="Nacionalidade"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>

    <div class="field">
      <p class="control has-icons-left">
        <input
          class="input"
          type="text"
          v-model="secretaria.login"
          placeholder="Login"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>

    <div class="field">
      <p class="control has-icons-left">
        <input
          class="input"
          type="password"
          v-model="secretaria.senha"
          placeholder="Password"
        />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>

    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <p class="control is-expanded has-icons-left">
            <input
              class="input"
              type="number"
              v-model="secretaria.salario"
              placeholder="Salário"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control is-expanded has-icons-left has-icons-right">
            <input
              class="input"
              type="number"
              v-model="secretaria.pis"
              placeholder="PIS"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </p>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <p class="control is-expanded has-icons-left has-icons-right">
            <input
              class="input"
              type="datetime-local"
              v-model="secretaria.dataContratacao"
              placeholder="Contratação"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </p>
          <p class="help m-2 has-text-left has-text-weight-bold">
            Data Contratação
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
  public onClickEditar(): void {
    this.secretariaClient.editar(this.secretaria).then(
      (success) => {
        this.notification = this.notification.new(
          true,
          "notification is-success",
          "Secretaria Editado(a) com sucesso!!!"
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
    this.secretaria = new Secretaria();
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
