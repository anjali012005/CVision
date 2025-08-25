const Resume = require("../models/Resume");

// Upload Resume Controller
exports.uploadResume = async (req, res) => {
    try {
        if (!req.user) return res.status(401).json({ error: "Unauthorized" });
        if (!req.file) return res.status(400).json({ error: "No file uploaded" });

        // Check if a resume already exists for this email
        const filter = { email: req.user.email };
        const update = {
            name: req.user.name,
            resumeUrl: req.file.path || req.file.url,
            updatedAt: new Date()
        };
        const options = { upsert: true, new: true }; // upsert = insert if not exists

        const updatedResume = await Resume.findOneAndUpdate(filter, update, options);

        res.status(200).json({
            message: "Resume uploaded successfully",
            url: updatedResume.resumeUrl
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Something went wrong" });
    }
};
