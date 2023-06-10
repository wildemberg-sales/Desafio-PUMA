# Desafio-PUMA

## Front-end

* Tecnologias:
    * Vue 3;
    * Axios;

A implementação consistiu na utilização do framework Vue, onde foi implementado um código baseado em componentes, diminuindo a complexidade de leitura, e tornando cada componente sem dependências.  
Para resgate de dados retornados pelo back-end, foi utilizado o Axios como principal ponte de comunição dos serviços, e funções para trabalhar com a manipulação dos dados dados.  

Para renderização dos usuários foi utilizado as própria funcionalidades de renderização do Vue, e implementado no componente UserContent, onde tal componente recebeu os dados através de props.  

E por último, para repassar as mensagens de erro para o usuário, foi criado o componente MsgErro onde tal componente recebe do back-end a mensagem de erro, e renderiza durante 5 segundos para o usuário.

### Iniciando servidor

* Requisitos:
    * Vue;
    * Axios;
    * Node/Yarn;

* Método de iniciação:
    * Instalando:
    ~~~~bash
    npm install @vue-cli axios
    ~~~~
    * Entrando na pasta
    ~~~~bash
    cd frontend/
    ~~~~
    * Instalando pacotes
    ~~~~bash
    npm install
    ~~~~
    * Iniciar servidor
    ~~~~bash
    npm run serve
    ~~~~

## Back-end

* Tecnologias:
    * NodeJS;
    * Express;
    * Nodemon
    * Axios;
    * Jest;
    * Supertest;

Para desenvolvimento do back-end, foi utilizado o nodeJS com o framework Express para desenvolvimento da API Rest, criando rotas e retornando dados, e o Nodemon para criar um servidor que atualiza automaticante a cada alteração no arquivo.  

Para buscar os dados da API do GitHub foi utilizado a ferramenta Axios, onde através dele criamos uma lista com todos os 30 usuários retornados pela API e trabalhos localmente com os dados fornecidos.

Para desenvolvimento dos teste unitários no back-end, foi utlizado as bibliotecas Jest e Supertest, onde a Jest era responsável por estruturar e executar os códigos de teste, e a Supertest responsável por criar instâncias e requisições locais durante a execução do código.

Por fim, a estruturação do back-end ficou de forma que o arquivo index.js era responsável por conter a iniciação do servidor, e o arquivo server.js por conter as rotas e funções.

### Iniciando servidor

* Requisitos:
    * Node;
    * Axios;
    * Jest;
    * Supertest;
    * Nodemon; (opcional)

* Método de iniciação:
    * Entrando na pasta
    ~~~~bash
    cd backend/
    ~~~~
    * Instalando pacotes
    ~~~~bash
    npm install
    ~~~~
    * Iniciar servidor
    ~~~~bash
    nodemon index.js
    ~~~~
    ou 
    ~~~~bash
    node index.js
    ~~~~

* Execução dos Testes:
    * Entrando na pasta
    ~~~~bash
    cd backend/
    ~~~~
    * Iniciar testes
    ~~~~bash
    npm run test
    ~~~~
    
**Observação:** Para execução do projeto, o usuário deve executar as duas aplicações ao mesmo tempo e em terminais diferentes para que haja uma correta atividade do projeto.