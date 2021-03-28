import {Cliente} from "./Cliente"

let sophia = new Cliente("Sophia", 0, "sophia", "password")
console.log(`O nome dela(e) é ${sophia.getNome()} e sua idade é ${sophia.getIdade()}`)

let estaAutenticavel:boolean = sophia.autenticar("sophia", "password")
console.log(`${sophia.getNome()} está autenticada? ${estaAutenticavel? "Sim" : "Não"}`)

// let cenarioDeFalha1 = new Cliente("", 0)
// console.log(`O nome dela(e) é ${cenarioDeFalha1.getNome()} e sua idade é ${cenarioDeFalha1.getIdade()}`)

// let cenarioDeFalha2 = new Cliente("Falha 2", -3)
// console.log(`O nome dela(e) é ${cenarioDeFalha2.getNome()} e sua idade é ${cenarioDeFalha2.getIdade()}`)

console.log(`Número randomico: ${Math.random()}`)