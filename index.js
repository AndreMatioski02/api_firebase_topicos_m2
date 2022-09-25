"use strict"

const express = require("express");
const cors = require("cors");
const config = require("./config");
const produtoRoutes = require("./routes/produtoRoutes");
const servicoRoutes = require("./routes/servicoRoutes");
const quartoRoutes = require("./routes/quartoRoutes");

const app = express();

app.use(express.json());

app.use(cors());

app.use("/api/produtos", produtoRoutes.routes);
app.use("/api/servicos", servicoRoutes.routes);
app.use("/api/quartos", quartoRoutes.routes);

app.listen(config.port, () => console.log(`API está rodando em http://localhost:${config.port}`));