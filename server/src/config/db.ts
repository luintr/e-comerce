import mongoose, { connect } from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

mongoose.set('strictQuery', true);

const connectDB = async () => {
  try {
    const mongoURI: string = process.env.MONGO_URI ?? '';
    await connect(mongoURI);
    console.log("MongoDB Connected...");
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
}

export default connectDB