const mongoose = require('mongoose');
const {Schema} = mongoose;

const ComentrioSchema = new Schema({
    comment : {type : String, require: true},
    description : {type : String},
    author: {
        typer : Schema.Types.ObjectId,
        ref: 'usuario',
        require : true,
        autopopulate : true
    }
});

ComentrioSchema.plugin(require('mongoose-autopopulate'));


module.exports = mongoose.model('comentario',ComentrioSchema);


