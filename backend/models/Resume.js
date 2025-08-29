const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        resumeUrl: {
            type: String,
            required: true
        },
        publicId: {
            type: String,
            required: true
        },
        format:
        {
            type: String,
            required: true
        },
        isPrivate:{
            type:Boolean
        },
        uploadedAt: {
            type: Date,
            default: Date.now
        }
    });

module.exports = mongoose.model("Resume", ResumeSchema);
