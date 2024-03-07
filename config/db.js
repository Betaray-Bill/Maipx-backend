import mongoose from 'mongoose';
import dotenv from 'dotenv';

const connectDB = async () => {
  dotenv.config();
  console.log(process.env.PORT)
  try {
    const conn = await mongoose.connect("mongodb://suryaorion12:dKkbrhslbmDuz3NT@ac-tznwdsd-shard-00-00.qcp7wpi.mongodb.net:27017,ac-tznwdsd-shard-00-01.qcp7wpi.mongodb.net:27017,ac-tznwdsd-shard-00-02.qcp7wpi.mongodb.net:27017/?ssl=true&replicaSet=atlas-9ek1eq-shard-0&authSource=admin&retryWrites=true&w=majority", { useNewUrlParser: true });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Errors: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;

// dKkbrhslbmDuz3NT