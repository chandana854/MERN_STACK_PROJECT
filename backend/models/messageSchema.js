import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name Required!"],
        minLength: [3, "Name must contain atleast 3 characters!"],
    },
    email: {
        type: String,
        required: [true, "email Required!"],
        validate: [validator.isEmail, "please provide valid email"],
    },
    subject: {
        type: String,
        required: [true, "subject Required!"],
        minLength: [5, "subject must contain atleast 3 characters!"],
    },
    message: {
        type: String,
        required: [true, "message Required!"],
        minLength: [10, "message must contain atleast 3 characters!"],
    },
});

export const Message= mongoose.model("Message", messageSchema);