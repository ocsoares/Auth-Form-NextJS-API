# **Auth Form NextJS API**

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/neliocursos/exemplo-readme/blob/main/LICENSE)

# Autor

👤 Cauã Soares

💼 https://www.linkedin.com/in/ocauasoares

# Sobre o projeto

## Deploy na plataforma Vercel:

🚀 https://auth-form-next-js-api.vercel.app <br>

Essa é uma **API** desenvolvida com **NestJS** para a minha aplicação **frontend** chamada **Auth Form NextJS**, e fornece recursos como cadastrar e logar usuário, checar se um JWT expirou e entre outros.

🌐 _Frontend_ https://github.com/ocsoares/Auth-Form-NextJS/

# Documentação

Documentação feita com a ferramenta **Swagger** na rota **/docs**

![Documentação](https://raw.githubusercontent.com/ocsoares/images/master/auth-form-nextjs-api/docs.png)

# Executar o projeto localmente

Pré-requisitos: Typescript, NodeJS e Docker

```bash
# clonar o repositório
git clone https://github.com/ocsoares/Auth-Form-NextJS-API

# instalar as bibliotecas
npm install

# criar um arquivo .env na pasta raíz do projeto

# configurar esse .env baseado no arquivo .env.example

# transpilar os arquivos do projeto para .js
npm run build

# iniciar o container do docker
docker-compose up

# executar o projeto
npm start
```
