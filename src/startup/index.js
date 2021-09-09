const express = require('express');

let _express = null;
let _config = null;


class Server {
    constructor({config,Rutas}){
        _config = config;
        _express = express().use(Rutas);
    }

    start(){
        return new Promise(resolve =>{
            _express.listen(_config.PORT, () =>{
                console.log(_config.APLICATION_NAME + " corriendo en el puerto " + _config.PORT);
                resolve();
            })
        })
    }
} 


module.exports = Server;