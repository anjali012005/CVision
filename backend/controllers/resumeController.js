const Resume = require("../models/Resume");
const cloudinary = require("../utils/cloudinaryConfig");
const streamifier = require("streamifier");

exports.uploadResume = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    const updatedResume = await Resume.findOneAndUpdate(
      { email: req.body.email }, // or req.user.email if auth
      {
        name: req.body.name,
        publicId: req.file.filename,
        format: req.file.mimetype.split("/")[1],
        url: req.file.path,
        updatedAt: new Date(),
      },
      { upsert: true, new: true }
    );

    res.status(200).json({
      message: "Resume uploaded successfully",
      resumeId: updatedResume._id,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};
