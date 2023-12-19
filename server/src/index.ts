import bodyParser from 'body-parser'
import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors';
import connectDB from './config/db';
import productRoute from './routes/productRoute'
import userRoute from './routes/userRoute'
import orderRoute from './routes/userRoute'
import { errorHandler, notFound } from './middleware/errorHandler';

require('dotenv').config()
const app = express()

connectDB()

app.use(cors());
app.set("port", process.env.PORT);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser())

app.get("/", (_req, res) => {
  res.send("API Running");
});

app.use('/api/products', productRoute)
app.use('/api/users', userRoute)
app.use('/api/orders', orderRoute)

app.use(notFound)
app.use(errorHandler)


const port = app.get("port");

const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

export default server;