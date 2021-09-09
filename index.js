const contenedor = require('./src/startup/container');

const server = contenedor.resolve("app");
const {MONGO} = contenedor.resolve("config");

const mongoose = require("mongoose");
//mongoose.set("useCreateIndex", true);

mongoose.connect(MONGO,

{useNewUrlParser: true
  
  })


.then(()=>server.start())
.catch(console.log)