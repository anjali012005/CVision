const cloudinary = require("./cloudinaryConfig");
const pdfParse = require("pdf-parse");
const axios = require("axios");

async function extractPdfFromCloudinary(publicId) {
  const result = await cloudinary.api.resource(publicId, { resource_type: "raw" });
  const url = result.secure_url;

  const response = await axios.get(url, { responseType: "arraybuffer" });
  const data = await pdfParse(response.data);
  return data.text;
}

module.exports = extractPdfFromCloudinary;
