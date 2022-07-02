<template>
  <div class="container">
    <h1 class="has-text-weight-bold is-size-2 mb-6">Detalhar</h1>

    <div class="is-flex is-justify-content-center">
      <div class="dados">
        <h1 class="has-text-weight-bold is-size-2 mb-6">
          {{ especialidade.nome }}
        </h1>
        <p class="has-text-weight-bold is-size-4">Nome</p>
        <p class="is-size-5 mb-3">{{ especialidade.nome }}</p>
        <i>
          <p class="has-text-weight-bold is-size-4">Status</p>

          <i
            class="is-size-5"
            v-if="especialidade.ativo"
            style="color: limegreen"
          >
            Ativo</i
          >
          <i class="is-size-5" v-if="!especialidade.ativo" style="color: red">
            Inativo</i
          >
        </i>
        <div
          class="bottons is-flex is-flex-direction-column is-align-items-center"
        >
          <button
            class="btn-edit mt-5"
            @click="onClickPaginaEditar(especialidade.id)"
          >
            Editar
          </button>
          <button
            @click="desativarEspecialidade(especialidade)"
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
import { Prop } from "vue-property-decorator";
import { EspecialidadeClient } from "@/client/especialidade.client";
import { Especialidade } from "@/model/especialidade.model";

export default class EspecialidadeFormDetalhar extends Vue {
  private especialidadeClient!: EspecialidadeClient;
  public especialidade: Especialidade = new Especialidade();

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

  public onClickPaginaEditar(idEspecialidade: number) {
    this.$router.push({
      name: "editarEspecialidade",
      params: { id: idEspecialidade, model: "editar" },
    });
  }

  public desativarEspecialidade(especialidadeDesativar: Especialidade) {
    especialidadeDesativar.id = this.especialidade.id;
    especialidadeDesativar.nome = this.especialidade.nome;
    especialidadeDesativar.ativo = false;
    especialidadeDesativar.cadastro = this.especialidade.cadastro;
    especialidadeDesativar.atualizado = this.especialidade.atualizado;
    this.especialidadeClient.editar(especialidadeDesativar);
    this.$router.push({ name: "especialidade" });
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
  width: 120vh;
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
