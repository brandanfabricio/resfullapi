const{createContainer,asClass,asFunction,asValue} = require('awilix');

//consfig 
const config  = require('../config');

const app = require('./index')

//servicios 
const {HomeService} = require('../service');
 
//controlers
const {HomeController} = require('../controllers')

// rutas
const {HomeRoutes} = require('../routes/index.routes');
const Rutas =  require('../routes')
//modelos de mongoose 
const {Comentario,Ideas,Usuario} = require('../models');

// Repositorios 
const {ComentarioRepositorio,IdeasRepositorio,UsusarioRepositorio } = require('../repositories')

const contenedor = createContainer();

contenedor
.register({
    app : asClass(app).singleton(),
    Rutas: asFunction(Rutas).singleton(),
    config : asValue(config)
})
.register({
    HomeService : asClass(HomeService).singleton()
})
.register({
    HomeController : asClass(HomeController.bind(HomeController)).singleton()
})
.register({
    HomeRoutes: asFunction(HomeRoutes).singleton()
})
.register({
    Usuario: asValue(Usuario),
    Comentario: asValue(Comentario),
    Ideas: asValue(Ideas)
})
.register({
    UsuarioRepositorio : assClass(UsuarioRepositorio).singleton(),
    ComentarioRepositorio : assClass(ComentarioRepositorio).singleton(),
     IdeasRepositorio : assClass(IdeasRepositorio).singleton()
})

module.exports = contenedor;