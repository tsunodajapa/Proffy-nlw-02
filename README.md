# Projeto Proffy
![npm](https://img.shields.io/npm/v/react?label=react)
![npm](https://img.shields.io/npm/v/react-native?label=react-native)
![npm](https://img.shields.io/npm/v/react-navigation?label=react-native-navigation)

#### O Proffy conta com uma plataforma web e mobile para seus usuários: professores e alunos. Os professores podem cadastrar os horários disponíveis para ministrar aulas, e os alunos podem ver esses cadastros com filtros e entrar em contato através de um link para o whatsapp.

## Requisitos de instalação

- Android >= 6.0 ou IOS >= 10.0
- React-Native >= 6.2
- React >= 16.13
- npm >= 6.0.0
- node >= 12.8
- expo >= 3.23

## Como utilizar

### Servidor 

#### Acesse o diretório do servidor
```
cd server
```

#### Execute o comando para instalações de dependências do servidor:

```
npm install
```

#### Para criação do banco de dados via migration:

```
knex migrate:latest --knexfile knexfile.ts migrate:latest
```
#### Iniciar o servidor:
> É necessário manter o servidor ativo, para que a web e o mobile consiga processar as informações

```
npm start
```

### Web

#### Acesse o diretório da web
```
cd web
```

#### Execute o comando para instalações de dependências da web:
> Altere a baseURL em ./src/services/api.ts 
```
npm install
```

#### Executar projeto Web
```
npm start
```
### Mobile

#### Acesse o diretório do mobile
```
cd mobile
```

#### Execute o comando para instalações de dependências do mobile:
> Altere a baseURL em ./src/services/api.ts 
```
npm install
```

#### Com o celular plugado no PC, utilize o comando:
> É necessário ativar o modo de depuração do celular

```
npm start
```

