const db = require('../../data/dbConfig');

module.exports = {
    find,
    remove
};

function find(){
    return db("users");
}

function remove(id){
    return db("users").where("id",id).del();
}