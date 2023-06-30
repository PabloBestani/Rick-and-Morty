const {User} = require("../DB_connection");

module.exports = async function login (req, res) {
    try {
        const {email, password} = req.query;
        if (email && password) {
            const userFound = await User.findOne({where: {email: email}});
            if (userFound) {
                if (userFound.password === password) {
                    return res.status(200).json({access: true});
                }
                return res.status(403).send("Contraseña incorrecta");
            }
            return res.status(404).send("Usuario no encontrado");
        }
        return res.status(400).send("Faltan datos");

    } catch (error) {
        res.status(500).send(error.message);
    }
}