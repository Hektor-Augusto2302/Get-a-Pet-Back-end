const jwt = require("jsonwebtoken");
const User = require("../models/User");

const getUserByToken = async(token) => {
    if(!token) {
        res.status(401).json({
            message: "Acesso negado!"
        })
    }

    const decoded = jwt.verify(token, "nossosecret");

    const userId = decoded.id;

    const user = await User.findOne({_id: userId});

    return user;
};

module.exports = getUserByToken;