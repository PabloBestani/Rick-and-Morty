
let myFavorites = [];

const postFav = (req, res) => {
    try {
        const fav = req.body;
        myFavorites.push(fav);
        // myFavorites.sort((a, b) => )
        res.status(200).json(myFavorites);

    } catch(error) {
        res.status(400).json({error: error.message});
    }
}

const deleteFav = (req, res) => {
    try {
        const {id} = req.params;
        myFavorites = myFavorites.filter((fav) => fav.id !== Number(id));
        res.status(200).json(myFavorites);

    } catch(error) {
        res.status(400).json({error: error.message});
    }
}

const resetFavs = (req, res) => {
    try {
       myFavorites = [];
       res.status(200).send("favoritos reseteados"); 
    } catch(error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    postFav,
    deleteFav,
    resetFavs
}