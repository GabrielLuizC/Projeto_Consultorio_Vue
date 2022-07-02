<template>
  <div class="container">
    <h1 class="has-text-weight-bold is-size-2 mb-6">Detalhar</h1>

    <div class="is-flex is-justify-content-center">
      <div class="dados">
        <h1 class="has-text-weight-bold is-size-2 mb-6">
          {{ convenio.nome }}
        </h1>
        <p class="has-text-weight-bold is-size-4">Nome</p>
        <p class="is-size-5 mb-3">{{ convenio.nome }}</p>
        <p class="has-text-weight-bold is-size-4">Valor</p>
        <p class="is-size-5 mb-3">R$ {{ convenio.valor }}</p>
        <i>
          <p class="has-text-weight-bold is-size-4">Status</p>

          <i class="is-size-5" v-if="convenio.ativo" style="color: limegreen">
            Ativo</i
          >
          <i class="is-size-5" v-if="!convenio.ativo" style="color: red">
            Inativo</i
          >
        </i>
        <div
          class="bottons is-flex is-flex-direction-column is-align-items-center"
        >
          <button
            class="btn-edit mt-5"
            @click="onClickPaginaEditar(convenio.id)"
          >
            Editar
          </button>
          <button @click="desativarConvenio(convenio)" class="btn-delet mt-4">
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
import { ConvenioClient } from "@/client/convenio.client";
import { Convenio } from "@/model/convenio.model";

export default class ConvenioDetalhar extends Vue {
  private convenioClient!: ConvenioClient;
  public convenio: Convenio = new Convenio();

  @Prop({ type: Number, required: false })
  private readonly id!: number;
  @Prop({ type: String, default: false })
  private readonly model!: string;

  public mounted(): void {
    this.convenioClient = new ConvenioClient();
    this.getConvenio();
  }

  private getConvenio(): void {
    this.convenioClient.findById(this.id).then(
      (sucess) => {
        this.convenio.id = sucess.id;
        this.convenio.nome = sucess.nome;
        this.convenio.valor = sucess.valor;
        this.convenio.ativo = sucess.ativo;
        this.convenio.cadastro = sucess.cadastro;
        this.convenio.atualizado = sucess.atualizado;
      },
      (error) => console.log(error)
    );
  }

  public onClickPaginaEditar(idConvenio: number) {
    this.$router.push({
      name: "editarConvenio",
      params: { id: idConvenio, model: "editar" },
    });
  }

  public desativarConvenio(convenioDesativar: Convenio) {
    convenioDesativar.id = this.convenio.id;
    convenioDesativar.nome = this.convenio.nome;
    convenioDesativar.valor = this.convenio.valor;
    convenioDesativar.ativo = false;
    convenioDesativar.cadastro = this.convenio.cadastro;
    convenioDesativar.atualizado = this.convenio.atualizado;
    this.convenioClient.editar(convenioDesativar);
    this.$router.push({ name: "convenio" });
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
