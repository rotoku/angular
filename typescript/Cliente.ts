import {Autenticavel} from "./Autenticavel"

class Cliente implements Autenticavel {
    
    

    constructor(private nome:string, private idade:number, private username:string, private password:string){
        if(nome == null || nome === "")
            throw new Error("Nome é requirido");
        this.nome = nome

        if(idade == null)
            throw new Error("Idade é requirido");
        else if(idade < 0)
            throw new Error("Idade não pode ser menor que 0");
        this.idade = idade

        if(username == null || username === "")
            throw new Error("Username é requirido");
        this.username = username

        if(password == null || password === "")
            throw new Error("Password é requirido");
        this.password = password
    }

    autenticar(username: string, password: string): boolean {
        return this.username === username && this.password === password
    }

    getNome():string {
        return this.nome;
    }

    getIdade():number {
        return this.idade;
    }
}

export {Cliente}