const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("./cloudinaryConfig");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "resumes",     
    resource_type: "raw",    
    format: async (req, file) => "pdf", 
    public_id: (req, file) => Date.now() + "-" + file.originalname
  }
});

const parser = multer({ storage: storage });

module.exports = parser;
