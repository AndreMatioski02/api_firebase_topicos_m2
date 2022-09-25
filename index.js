// definindo o strict mode
"use strict"

// Definindo imports
const express = require("express");
const cors = require("cors");
const config = require("./config");

// Inicializando o Express
const app = express();

// Definindo a utilização de JSON no corpo da requisição
// (Body Parser)
app.use(express.json());

// Definindo a utilização do CORS
// (frontend)
app.use(cors());

// Definindo a porta onde o servidor estará ouvindo
app.listen(config.port, () => console.log(`API está rodando em http://localhost:${config.port}`));