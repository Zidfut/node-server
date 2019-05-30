const express = require('express')
const app = express()
const crypto = require('crypto')


const products = function(prodArr){
    return app.post('/products', (req, res) => {

        let product = req.body.product

        console.log(product)

        console.log(req.body.product.date)

        let validation
        
        const timestamp = Date.now()
        const salt1 = Math.round(Math.random() * 100000000)
        const salt2 = Math.round(Math.random() * 100000000)
    
        let idCandidate = crypto.createHash('sha256').update(`${salt1}_${timestamp}_${salt2}`).digest('hex')    
        
        const prod = prodArr.find(prod => prod.id === idCandidate)

        
        if(prodArr.length == 0 || prod === undefined){
            validation = true
        } 
            
        if(validation) {
            product.id = idCandidate
            prodArr.push(product)
        } 

        res.send(prodArr)
    
    });  
}
module.exports = products