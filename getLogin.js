const express = require('express')
const app = express()

const users = function(){
    return app.get('/', (req, res) => {

        const authToken = req.headers.authorization

        res.send(data = {
            token: authToken
        })
   
    });  
}
module.exports = users