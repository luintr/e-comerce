import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors';
import connectDB from './config/db';
import productRoute from './routes/productRoute'

require('dotenv').config()
const app = express()

connectDB()

app.use(cors());
app.set("port", process.env.PORT);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (_req, res) => {
  res.send("API Running");
});

app.use('/api/products', productRoute)


const port = app.get("port");

const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

export default server;