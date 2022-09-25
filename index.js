"use strict"

const express = require("express");
const cors = require("cors");
const config = require("./config");
const produtoRoutes = require("./routes/produtoRoutes");
const servicoRoutes = require("./routes/servicoRoutes");
const quartoRoutes = require("./routes/quartoRoutes");
const colaboradorRoutes = require("./routes/colaboradorRoutes");
const animalRoutes = require("./routes/animalRoutes");
const clienteRoutes = require("./routes/clienteRoutes");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/produtos", produtoRoutes)
app.use("/api/servicos", servicoRoutes)
app.use("/api/quartos", quartoRoutes)
app.use('/api/colaboradores', colaboradorRoutes)
app.use('/api/animais', animalRoutes)
app.use('/api/clientes', clienteRoutes)

app.listen(config.port, () => console.log(`API está rodando em http://localhost:${config.port}`));