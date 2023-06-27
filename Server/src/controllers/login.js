const users = require("../utils/users");

const login = (req, res) => {
    try {
        const {email, password} = req.query;
        const isValid = users.some((user) => user.email === email && user.password === password);
        if (isValid) return res.status(200).json({access: true});
        return res.status(200).json({access: false});

    } catch(error) {
        res.status(400).json({error: error.message});
    }


}

module.exports = login;