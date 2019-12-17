
const JWT = require('jsonwebtoken');
const JWTConfig = require('../cipher/jwt_config')
const NoAuthError = require('../error/no_auth')

module.exports = (options) => {
    return (req, res, next) => {
        (async () => {
            const authorization = req.get('Authorization')
            if (!authorization || authorization.indexOf('Bearer') === -1) {
                throw new NoAuthError(null)
            }
            const token = authorization.split(' ')[1]
            if (!token) {
                throw new NoAuthError(null)
            }
            let user;
            try {
                user = JWT.verify(token, JWTConfig.SECRET)
            } catch (e) {
                throw new NoAuthError(token)
            }

            req.user = user;

        })()
            .then(r => {
                console.log(r);
                next()
            })
            .catch(e => {
                console.log(e);
                next(e)
            })
    }
}