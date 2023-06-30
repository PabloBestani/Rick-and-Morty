const {User} = require("../DB_connection");

module.exports = async function postUser (req, res) {
    try {
        const {email, password} = req.body;
        if (email && password) {
            const response = await User.findOrCreate({
                where: {
                    email: email,
                    password: password
                }
            })
            return res.status(200).json(response);
        }
        return res.status(400).send("Faltan datos");

    } catch (error) {
        res.status(500).json({error: error.message});
    }
}