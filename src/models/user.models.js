const mongoose = require('mongoose');
const {Schema} = mongoose;
const {compareSync,hashSync,genSaltSync} = require('bcryptjs');

//crear escque de usuario 
const UsusarioSchema = new Schema({
    name : {type: String, require: true},
    username: {type: String, require: true},
    password: {type: String, require: true}
});

// eliminar contraseña  para no mostrarse 
UsusarioSchema.methods.toJSON = function(){
    let usuario = this.toObject();
    delete usuario.password;
    return usuario;
};

//comparar contraseñas 
UsusarioSchema.methods.compareSync = function(password){
    return compareSync(password, this.password);
};

//hashar contraseñas 
UsusarioSchema.pre("save",async function(next){
    const usuario = this;
    if(!usuario.isModified('password')){
        return next();
    }
    const salt = genSaltSync(10);
    const hashContrasena = hashSync(usuario.password, salt);
    usuario.password = hashContrasena;
    next();
});



module.exports =  mongoose.model('usuario', UsusarioSchema);

