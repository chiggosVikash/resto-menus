import mongoose, { Connection } from "mongoose";

const MONGODB_URI = process.env.MONGO_URL;

let cachedConnection: Connection | null = null;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

export async function dbConnect() {
  if (cachedConnection || mongoose.connection.readyState >= 1) {
    return cachedConnection;
  }

  try {
    // If no cached connection exists, establish a new connection to MongoDB //
    const cnx = await mongoose.connect(MONGODB_URI as string);
    // Cache the connection for future use
    cachedConnection = cnx.connection;
    // Log message indicating a new MongoDB connection is established
    console.log("New mongodb connection established");
    // Return the newly established connection
    return cachedConnection;

  } catch (error) {
    console.log("Error connecting to MongoDB", error);
    throw error;
  }
}
