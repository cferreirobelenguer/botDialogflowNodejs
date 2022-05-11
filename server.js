//Se exportan las dependencias
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 3000;

// for parsing json
app.use(
  bodyParser.json({
    limit: "20mb",
  })
);
// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: false,
    limit: "20mb",
  })
);
//wehbook mesenger/facebook verify token que se obtiene de config.js
app.use("/messenger", require("./Facebook/facebookBot"));

//petición get retorna que bot funciona
app.get("/", (req, res) => {
  return res.send("Chatbot Funcionando");
});

//puerto en escucha
app.listen(port, () => {
  console.log(`Escuchando peticiones en el puerto ${port}`);
});
