import { AbstractEntity } from "./abstract-entity.model";
import { Sexo } from "./sexo.enum";

export class Pessoa extends AbstractEntity{
    nome! : string
    telefone! : String
    celular! : String
    nacionalidade! : String
    cpf! : String
    rg! : String
    email! : String
    login! : String
    senha! : String
    sexo! : Sexo
}