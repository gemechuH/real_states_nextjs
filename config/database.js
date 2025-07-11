import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (connected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      serverSelectionTimeoutMS: 30000, // ⏱️ 30 seconds instead of default 10
      socketTimeoutMS: 45000, // 🕓 45 seconds for socket timeout
      connectTimeoutMS: 30000, // 🧵 30 seconds for initial connection
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    connected = true;
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};

export default connectDB;
