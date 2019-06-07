const express = require('express')
const app = express()
const port = 3000
const moment = require('moment');
const cors = require('cors')
const corsOptions = {
    origin: '*',
    'preflightContinue': false,
    optionsSuccessStatus: 200
}

const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');




const products = require('./products') // products Array
const users = require('./user') // users Array


const tokenVerify = require('./auth') // token verify

const getProduct = require('./get')
const postProduct = require('./postGraph')
const deleteProduct = require('./delete')
const putProduct = require('./updateGraph')

const postLogin = require('./login')
const getLogin = require('./getlogin')


app.use(cors(corsOptions))
app.use(express.urlencoded())
app.use(express.json())
app.options('/', cors())


//
const schema = buildSchema(`
  type Query {
    product(id: String!): Product,
    products: [Product]
    addProduct: [Product]
    editProduct: [Product]
  }

  type Product {
    id: String,
    name: String,
    price: Int,
    description: String,
    date: String
  }

  type Mutation {
    addProduct(
      id: String,
      name: String,
      price: Int,
      description: String,
      date: String
    ): [Product]
    
    editProduct(
      id: String,
      name: String,
      price: Int,
      description: String
    ): [Product]
  }

`);

const root = {
    product: (args) => {
        let id = args.id
        return products.filter(product => {
          return product.id == id
        })[0];
    },
    products: () => {
      return products
    },
    addProduct: postProduct,
    editProduct: putProduct
};

app.use('/graphql',tokenVerify, graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

// app.get('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: false
// }));

//


app.post('/', postLogin(users))
app.get('/',tokenVerify, getLogin())


// app.get('/products',tokenVerify, getProduct(products))
// app.post('/products', tokenVerify, postProduct(products))
app.delete('/products/:id', tokenVerify, deleteProduct(products))
// app.put('/products/:id', tokenVerify, putProduct(products))


app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ` + port)
})