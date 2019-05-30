const products = require('./products')
const crypto = require('crypto')

const postProd = function(newProd){

    let validation
    
    const timestamp = Date.now()
    const salt1 = Math.round(Math.random() * 100000000)
    const salt2 = Math.round(Math.random() * 100000000)

    let idCandidate = crypto.createHash('sha256').update(`${salt1}_${timestamp}_${salt2}`).digest('hex')    
    
    const prod = products.find(prod => prod.id === idCandidate)

    
    if(products.length == 0 || prod === undefined){
        validation = true
    } 
        
    if(validation) {
        newProd.id = idCandidate
        products.push(newProd)
    }

    console.log(newProd)

    return products
}

module.exports = postProd