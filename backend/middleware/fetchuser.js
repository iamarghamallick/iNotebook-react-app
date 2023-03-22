const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Argha@2023';

const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and id to req object
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).json({ error: "Please authenticate using valid token" });
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using valid token" })
    }
}
module.exports = fetchuser;