const jwt = require('jsonwebtoken');
const { verify } = require('jsonwebtoken');
//verificación de tokens 
function verifyToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    if (authHeader == null) return res.sendStatus(403);
    jwt.verify(authHeader, "secret_key", (err, user) => {
        if (err) return res.sendStatus(404);
        req.user = user;
        next();
    });
}

module.exports = {verifyToken};


