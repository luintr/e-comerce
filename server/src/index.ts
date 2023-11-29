import bodyParser from 'body-parser'
import express from 'express'
import { products } from './data/product';

require('dotenv').config()

const app = express()

app.set("port", process.env.PORT || 5000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (_req, res) => {
  res.send("API Running");
});

app.get('/api/products', (req, res) =>{
  res.json(products)
})

app.get('/api/products/:id', (req, res)=> {
  const product = products.find(item => item._id === req.params.id)
  res.json(product)
})
const port = app.get("port");

const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

export default server;