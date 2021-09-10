const BaseRepository = require('./base.repository');
let _comentario = null;

class ComentarioRepository extends BaseRepository {
    constructor({Comentario}){
        super(Comentario);
        _comentario = Comentario;
    }
}

module.exports = ComentarioRepository;