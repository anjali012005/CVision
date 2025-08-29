const axios = require("axios");
const Resume = require("../models/Resume");
const extractPdfFromCloudinary = require("../utils/extractPdf");

exports.startInterview = async (req, res) => {
  try {
    const userResume = await Resume.findOne({ email: req.user.email });
    if (!userResume) return res.status(404).json({ error: "Resume not found" });

    const resumeText = await extractPdfFromCloudinary(userResume.publicId);

    // Call local VAPI
    const vapiResponse = await axios.post("http://localhost:5001/generate-interview", {
      resumeText
    });

    res.status(200).json({
      message: "Interview session started",
      interviewData: vapiResponse.data
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong", details: err.message });
  }
};
