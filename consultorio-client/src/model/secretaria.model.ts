import { Pessoa } from "./pessoa.model";

export class Secretaria extends Pessoa{
    salario! : DoubleRange
    dataContratacao! : Date
    pis! : String
}