const express = require('express')
const app = express()


const products = function(prodArr){
    return app.delete('/products/:id', (req, res) => {
        let ID = req.params.id;
        console.log(ID)

        let index = prodArr.findIndex( prod =>{
            return prod.id == ID;
        })
        
        prodArr.splice(index, 1)

        res.send(prodArr)
    });
}

module.exports = products