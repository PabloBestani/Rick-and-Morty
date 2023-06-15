const axios = require("axios");

const getCharById = function(res, id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    //*ESTO NO VA PORQUE axios devuelve un objeto response con atributo data
    .then(({data}) => {
        return { id: id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin?.name,
        image: data.image,
        status: data.status}
    })
    .then((char) => {
        res.writeHead(200, {"content-type": "application/json"});
        res.end(JSON.stringify(char));
        //*ESTE RETURN NO HACE FALTA porque el res.end ya funciona bien
        // return res.end(JSON.stringify(char));
    })
    .catch((error) => {
        res.writeHead(500, {"content-type": "application/json"});
        res.end({error: error.message});
    })
}

module.exports = {
    getCharById
}