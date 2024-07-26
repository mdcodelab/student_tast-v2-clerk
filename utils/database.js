import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  console.log("connectDB called...");
  mongoose.set("strictQuery", true);

  // If the database is already connected, don't connect again
  if (connected) {
    console.log("MongoDB is already connected...");
    return;
  }

  // Connect to MongoDB
  try {
    await mongoose.connect(process.env.MONGO_URI);
    connected = true;
    console.log("MongoDB connected...");
    console.log(connected);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
