const BaseRepository = require('./base.repository');
let _user = null;

class UserRepository extends BaseRepository {
    constructor({Usuario}){
        super(Usuario);
        _user = Usuario;

    }
    async getUserByUsername(username){
        return await _user.findOne({username});
    }
}

module.exports = UserRepository;