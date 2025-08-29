const Resume = require("../models/Resume");
const cloudinary = require("../utils/cloudinaryConfig");
const streamifier = require("streamifier");

exports.uploadResume = async (req, res) => {
  console.log("Upload route hit!");
  console.log("File info:", req.file);

  try {
    if (!req.file) return res.status(400).json({ error: "No file uploaded" });

    // Upload file buffer to Cloudinary
    const streamUpload = (req) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "resumes", resource_type: "raw", public_id: Date.now() + "-" + req.file.originalname },
          (error, result) => {
            if (result) resolve(result);
            else reject(error);
          }
        );
        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    };

    const result = await streamUpload(req);

    // Save/update resume in MongoDB
    const updatedResume = await Resume.findOneAndUpdate(
      { email: req.user.email }, // requires auth
      {
        name: req.user.name,
        publicId: result.public_id,
        format: result.format,
        resumeUrl: result.secure_url,
        updatedAt: new Date(),
      },
      { upsert: true, new: true }
    );

    res.status(200).json({
      message: "Resume uploaded successfully",
      resumeId: updatedResume._id,
      resumeUrl: result.secure_url,
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong", details: err.message });
  }
};
