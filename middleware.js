const jwt = require('jsonwebtoken');



//verificación de tokens 
function verifyToken(req, res, next) {
    const authHeader = req.headers["token"];
    if (authHeader == null) return res.sendStatus(403);
    jwt.verify(authHeader, "secret_key", (err, user) => {
        if (err) return res.sendStatus(404);
        req.user = user;
        next();
    });
}

function verifyTokenEmployee(req, res, next) {
    const authHeader = req.headers["token"];
    if (authHeader == null) return res.sendStatus(403);
    jwt.verify(authHeader, "secret_key", (err, user) => {
        if (err) return res.sendStatus(404);
        req.user = user;
        next();
    });
}


module.exports = {verifyTokenEmployee};
module.exports = {verifyToken};


