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

## Começando com o angular cli
```
ng new customer-backend --prefix=cb
ng serve
```

## O que é um componente
- classe
- template
- selector(tag)
- decorator @Component

## Adicionando um componente no nosso projeto
```
### g = generate, c = component
$ ng g c header
```

## property binding
- one-way-bind = component para o template
- utilizado nos atributos html com o DOM

```
$ ng g c customer

name: string = 'Rodrigo'
isActive: boolean = true

<div>
      Customer: {{name}}  
      <div [hidden]="!isActive">
          Customer is Active
      </div>
</div>
```

## O que são diretivas?
- componentes
- estruturas
- atributos

```
<div *ngIf="customer.isActive">
show some information
</div>

## or

<template [ngIf]="customer.isActive">
<div>
show some information
</div>
</template


<ul>
    <li *ngFor="let customer of customers">{{customer.name}}</li>    
</ul>

<ul>
    <li *ngFor="let customer of customers; let i=index">
        {{i+1}} - {{customer.name}}
    </li>    
</ul>

<container-element [ngSwitch]="switch_expression">
  <!-- the same view can be shown in more than one case -->
  <some-element *ngSwitchCase="match_expression_1">...</some-element>
  <some-element *ngSwitchCase="match_expression_2">...</some-element>
  <some-other-element *ngSwitchCase="match_expression_3">...</some-other-element>
  <!--default case when there are no matches -->
  <some-element *ngSwitchDefault>...</some-element>
</container-element>
```