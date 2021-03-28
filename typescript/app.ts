import * as _ from "lodash"
console.log(_.pad("Typescript Examples", 40, "="))

let nome: string = "Rodrigo"
console.log(nome)

let idade: number = 35
console.log(idade)

idade += 1
console.log(idade)

let ehMaior = function (idade: number): boolean {
    return idade >= 18
}

idade = 17
console.log(`sua idade atual é ${idade} voce pode entrar na balada? ${ehMaior(idade)?"Sim":"Não"}`)

let call = (name:string) => console.log(`Olá mundo, ${name}!`)
call("Laura")

function inc (speed:number, inc:number = 1):number{
    return speed + inc
}

console.log(`inc (5,1) = ${inc(5,1)}`)
console.log(`inc (5) = ${inc(5)}`)