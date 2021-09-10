const mongoose = require('mongoose');
const {Schema} = mongoose;

const IdeasSchema = new Schema({
    idea : { type: String, require: true},
    description : {type : String},
    upvotes: [{type: Boolean}],
    downvotes: [{type: Boolean}],
    author: {
        type: Schema.Types.ObjectId,
        ref: "usuario",
        require: true,
        autoIncrement: true
    },
    comments : [ 
        {
            type: Schema.Types.objectId,
            ref: "comentario",
            require: true,
            autopopulate: true
        }
    ]
});

IdeasSchema.plugin(require('mongoose-autopopulate'));


module.exports = mongoose.model('ideas',IdeasSchema);
