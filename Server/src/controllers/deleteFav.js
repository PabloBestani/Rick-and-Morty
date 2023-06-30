const {Favorite} = require("../DB_connection");

module.exports = async function deleteFav (req, res) {
    try {
        const {id} = req.params;
        if (id) {
            await Favorite.destroy({where: {id: id}});

            const response = await Favorite.findAll();
            return res.status(200).json(response);
        }
        return res.status(401).send("Falta un id");

    } catch (error) {
        res.status(500).send(error.message);
    }
} 