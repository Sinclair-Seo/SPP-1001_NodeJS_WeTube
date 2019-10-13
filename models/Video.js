import mongoose from "mongoose";
import { stringLiteral } from "babel-types";

const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: "FileUrl is required."
    },
    title: {
        type: String,
        required: "Title is required."
    },
    description: String,
    views: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const model = mongoose.model("Video", VideoSchema);
export default model;