const {Router} = require("express");
// const controllers = require("../controllers/handleFavorites");
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const deleteFav = require("../controllers/deleteFav");
const postFav = require("../controllers/postFav");
const postUser = require("../controllers/postUser");


const mainRouter = Router();

mainRouter.get("/character/:id", getCharById);

mainRouter.get("/login", login);

mainRouter.post("/login", postUser);

//! CREO QUE ESTA ES LA QUE USABAMOS PARA QUE SE RESETEN LOS FAVS
//! Y QUE NO SE ACUMULEN ETERNAMENTE
// mainRouter.delete("/login", controllers.resetFavs);

mainRouter.post("/fav", postFav);

mainRouter.delete("/fav/:id", deleteFav);

module.exports = mainRouter;