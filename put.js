const express = require('express')
const app = express()


const products = function(prodArr){
    return app.put('/products/:id', (req, res) => {
        let updateProduct = req.body.params

        const product = prodArr.find(prod => prod.id === updateProduct.id)

        product.name = updateProduct.name;
        product.price = updateProduct.price;
        product.description = updateProduct.description;

        console.log(product)

        res.send(prodArr);
    });
}

module.exports = products