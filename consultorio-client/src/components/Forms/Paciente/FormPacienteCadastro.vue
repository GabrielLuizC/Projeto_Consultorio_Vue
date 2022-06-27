<template>
  <div class="cad-form mt-5">
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <p class="control is-expanded has-icons-left">
            <input class="input" type="text" placeholder="Nome" />
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
          <input class="input is-success" type="email" placeholder="Email" />
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
            <input class="input" type="number" placeholder="Celular" />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control is-expanded has-icons-left has-icons-right">
            <input class="input" type="number" placeholder="Telefone" />
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
            <input class="input" type="number" placeholder="CPF" />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </p>
        </div>
        <div class="field">
          <p class="control is-expanded has-icons-left has-icons-right">
            <input class="input" type="number" placeholder="RG" />
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
          <select class="is-hovered">
            <option>Masculino</option>
            <option>Feminino</option>
            <option>Outro</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="text" placeholder="Nacionalidade" />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>

    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="text" placeholder="Login" />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>

    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="password" placeholder="Password" />
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>

    <div class="field is-flex is-justify-content-center is-align-items-center">
      <p class="help has-text-weight-bold is-size-6 mr-3">Tipo Atendimento</p>
      <div class="control">
        <div class="select">
          <select class="is-hovered">
            <option>Particular</option>
            <option>Convênio</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field is-flex is-justify-content-center is-align-items-center">
      <p class="help has-text-weight-bold is-size-6 mr-3">Convênio</p>
      <div class="control">
        <div class="select">
          <select class="is-hovered">
            <option>UNIMED</option>
            <option>ITAMED</option>
          </select>
        </div>
      </div>
    </div>

    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <p class="control is-expanded has-icons-left has-icons-right">
            <input
              class="input"
              type="number"
              placeholder="Número Cartão Convênio"
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
            <input class="input" type="date" placeholder="Vencimento" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </p>
          <p class="help m-2 has-text-left has-text-weight-bold">
            Data Vencimento
          </p>
        </div>
      </div>
    </div>

    <div class="field">
      <p class="control">
        <button class="btn-cadastrar">Confirmar</button>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class FormPacienteCadastro extends Vue {
  msg!: string;
}
</script>

<style scoped lang="scss">
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
