const User = require("../models/User");
const { signToken } = require("../utils/jwt");

// ---------------- User Controllers ----------------

// Register User
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are mandatory!" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const user = await User.create({ name, email, password });

    const token = signToken({ id: user._id, email: user.email, name: user.name });

    res.status(200).json({
      message: "User registered successfully!",
      user: { id: user._id, name: user.name, email: user.email },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while registering user!" });
  }
};

// Login User
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required!" });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found. Please register!" });

    if (user.password !== password) return res.status(401).json({ message: "Incorrect password!" });

    const token = signToken({ id: user._id, email: user.email, name: user.name });

    res.status(200).json({
      message: "Logged in successfully!",
      user: { id: user._id, name: user.name, email: user.email },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Login failed!" });
  }
};

// Upload Resume
// const resumeUpload = async (req, res) => {
//   try {
//     const resumeFile = req.file;
//     const { name, email } = req.body;

//     if (!resumeFile) {
//       return res.status(400).json({ message: "No file uploaded!" });
//     }

//     // Optional: send resumeFile.path to VAPI
//     // const vapiResponse = await sendToVAPI(resumeFile.path);

//     res.status(200).json({
//       message: "Resume uploaded successfully!",
//       user: { name, email },
//       resumeFile: resumeFile.filename,
//       // vapiResponse
//     });
//   } catch (error) {
//     console.error("Error uploading resume:", error);
//     res.status(500).json({ message: "Failed to upload resume" });
//   }
// };

// Upload Resume Controller (Cloudinary)
const resumeUpload = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded!" });
    }

    // Cloudinary automatically returns a URL in: req.file.path
    const resumeUrl = req.file.path; // ⭐ Cloudinary URL
    const publicId = req.file.filename; // Cloudinary public ID

    res.status(200).json({
      message: "Resume uploaded successfully!",
      user: { name, email },
      resumeUrl,      // full https cloud URL
      publicId,       // for deleting later if needed
    });
  } catch (error) {
    console.error("Error uploading resume:", error);
    res.status(500).json({ message: "Failed to upload resume" });
  }
};


module.exports = { registerUser, loginUser, resumeUpload };
