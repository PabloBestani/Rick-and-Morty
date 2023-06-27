const axios = require("axios");

const getCharById = async function(req, res) {
    try {
        const {id} = req.params;
        const URL = "https://rickandmortyapi.com/api/character/";
        const data = (await axios(URL + id)).data;
 
        //ESTA BIEN ESTO QUE SIGUE??
        if(data.id) {
            const pj = {
                id: id,
                status: data.status,
                name: data.name,
                species: data.species,
                origin: data.origin.name,
                image: data.image,
                gender: data.gender
            }
            return res.status(200).json(pj);
        }
        return res.status(404).send("Not found");

    } catch(error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = getCharById;