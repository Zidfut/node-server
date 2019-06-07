const products = require('./products')

const updateProd = function(updProd){

        console.log(2342)

        let updateProduct = updProd

        const product = products.find(prod => prod.id === updateProduct.id)

        product.name = updateProduct.name;
        product.price = updateProduct.price;
        product.description = updateProduct.description;

        console.log(product)

        return products
}

module.exports = updateProd