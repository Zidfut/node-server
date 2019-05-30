const users = require('./user')

const verify = (req, res, next) => {

        const authToken = req.headers.authorization

        const user = users.find(user => user.token === authToken)

        if(user === undefined || null){
            res.send(data = {
                token: false
            })
        } else {
            next();
        }            
    }
module.exports = verify