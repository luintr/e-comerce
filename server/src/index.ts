import bodyParser from 'body-parser'
import express from 'express'
import { products } from './data/product';
import cors from 'cors';

require('dotenv').config()

const app = express()

app.use(cors());
app.set("port", process.env.PORT);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (_req, res) => {
  res.send("API Running");
});

app.get('/api/products', (req, res) =>{
  res.send({data: products})
})

app.get('/api/products/:id', (req, res)=> {
  const product = products.find(item => item.id.toString() === req.params.id)
  res.send({data: product})
})
const port = app.get("port");

const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

export default server;