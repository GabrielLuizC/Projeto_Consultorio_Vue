import { AbstractEntity } from "./abstract-entity.model";
import { Especialidade } from "./especialidade.model";

export class Medico extends AbstractEntity{
    crm! : string
    consultorio! : String
    porcentagemParticipacao! : DoubleRange
    consulta! : DoubleRange
    especialidade! : Especialidade
}