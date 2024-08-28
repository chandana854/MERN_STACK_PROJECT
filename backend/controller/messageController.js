import { Message } from "../models/messageSchema.js";
import validator from 'validator';

export const sendMessage = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        // Check for required fields
        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required!",
            });
        }

        // Validate email format
        if (!validator.isEmail(email)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email format.",
            });
        }

        // Create a new message
        await Message.create({ name, email, subject, message });

        // Respond with success status and message
        res.status(201).json({
            success: true,
            message: "Message sent successfully",
        });

    } catch (error) {
        // Log the error
        console.error("Error:", error.message || "Internal Server Error");

        // Check if the error is a Mongoose validation error
        if (error.name === "ValidationError") {
            const customMessages = Object.values(error.errors).map(val => {
                return `${val.message} please provide a valid ${val.path}`;
            });
            return res.status(400).json({
                success: false,
                message: customMessages.join(", ")
            });
        }

        // Handle other errors and respond with server error status
        return res.status(500).json({
            success: false,
            error: error.message || "Internal Server Error",
        });
    }
};
