const CrudRepository  = require("./crud-repository");
const { Airplane } =require('../models');

class AirplaneRepository extends CrudRepository {
    constructor() {
        super(Airplane);
    }

    //We can write some extra raw queries here if we want to do so.

}
module.exports = AirplaneRepository;

