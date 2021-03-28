# Angular
## 4 Linguagens
- ES5
- ECMASCRIPT 2015
- Typescript
- DART

## preparando o ambiente
Download [NodeJS](https://nodejs.org/en) e instalar

```
## Verificando a versão do node instalado
$ node --version
v12.17.0

## Verificando a versão do node package management instalado
$ npm --version
6.14.4

## instalando o angular cli
$ npm install -g @angular/cli

## verificando a versão do angular cli
$ ng --version
```
## Typescript
é uma extensão do javascript
tipos estáticos
encapsulamento com classes e módulos
suporta código js
Cliente.ts --transpile--> Cliente.js

### Tipos
- let nome:string = "Nome"
- let idade:number = 10
- let ativo:boolean = true
- let qualquerCoisa:any = Teste

```
## instalando o typescript 
$ npm install -g typescript

## verificando a versão do typescript
$ tsc --version

## compilando o arquivo typescript
$ tsc app.ts

## deixando o compilador em background
$ tsc -w

## executando o código
node dist/app
```

## Definição de tipos
```
*.d.ts

$ npm init

$ npm install --save lodash@4.14

$ npm install --save-dev @types/lodash@4.14
```