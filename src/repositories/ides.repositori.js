const BaseRepository = require('./base.repository');
let _idea = null;

class IdeasRepository extends BaseRepository {
    constructor({Ideas}){
        super(Ideas);
        _idea = Ideas;
    }
    async getUserIdeas( author){
        return await _ideas.find({ author});
    }
}

module.exports = IdeasRepository;