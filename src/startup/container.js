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

module.exports = contenedor;