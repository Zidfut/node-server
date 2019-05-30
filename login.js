const express = require('express')
const app = express()
const crypto = require('crypto')


const users = function(userArr){
    return app.post('/', (req, res) => {

        const usr = req.body.user

        
        const salt1 = usr.name
        const salt2 = usr.password

    
        let accessToken = crypto.createHash('sha256').update(`${salt1}_${salt2}`).digest('hex')


        const user = userArr.find(user => user.token === accessToken)

        if(user === undefined || null){
            res.send(data = {
                token: false
            })
        } else {
            res.send(data = {
                token: accessToken
            })
        }
   
    });  
}
module.exports = users