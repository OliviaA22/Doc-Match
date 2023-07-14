import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const config = process.env;

const connectToDb = async () => {
  const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.vr5m2af.mongodb.net/DocMatch?retryWrites=true&w=majority`;
  
  const options = { useNewUrlParser: true, useUnifiedTopology: true };

  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
};

export default connectToDb;
