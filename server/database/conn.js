import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

// Function to connect to the MongoDB database
const connect = async () => {
    // Create an instance of MongoMemoryServer to run an in-memory MongoDB server
    const mongod = await MongoMemoryServer.create();
    // Get the connection URI for the MongoDB server
    const getUri = mongod.getUri();
    mongoose.set('strictQuery', true);
    const db = await mongoose.connect(getUri)
    // For connecting to a real MongoDB server
    // const db = await mongoose.connect("mongodb+srv://admin:admin123@cluster0.o5kiwix.mongodb.net/?retryWrites=true&w=majority");
    console.log("Database Connected");
    // Return the Mongoose connection object
    return db;
}
export default connect;