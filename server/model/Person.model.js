// MongoDB Person Schema
import mongoose from "mongoose";


// Define the Person schema
export const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name"],
    },
    age: {
        type: Number,
        required: [true, "Please provide an age"],
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: [true, "Email Exist"],
    }
});
export default mongoose.model.Persons || mongoose.model('Person', personSchema);