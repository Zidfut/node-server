const express = require('express')
const app = express()


const products = function(prodArr){
    return app.get('/products', (req, res) => {
        res.send(prodArr);
    })  
}

module.exports = products