import mongoose from "mongoose";

// Database connection
const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connection successful!');
  } catch (error) {
    console.error('MongoDB connection error', error);
  }
};

export default dbConnect;