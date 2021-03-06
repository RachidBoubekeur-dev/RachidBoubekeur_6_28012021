const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        // Récupération du token
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET_SO_PEKOCKO_P6_OPEN_CLASSROOMS');
        // Décodage du token
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId) {
            throw 'Invalid user ID';
        } else {
            next();
        }
    } catch {
        res.status(401).json({ error: new Error('Invalid request !') });
    }
};