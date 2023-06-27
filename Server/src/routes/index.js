const {Router} = require("express");
const controllers = require("../controllers/handleFavorites");
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");

const mainRouter = Router();

mainRouter.get("/character/:id", getCharById);

mainRouter.get("/login", login);

mainRouter.delete("/login", controllers.resetFavs);

mainRouter.post("/fav", controllers.postFav);

mainRouter.delete("/fav/:id", controllers.deleteFav);

module.exports = mainRouter;