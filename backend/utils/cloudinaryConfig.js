const cloudinary = require("cloudinary").v2;
const pdfParse = require('pdf-parse');
const fs = require('fs');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

async function extractPdfFromCloudinary(publicId) {
  // Download the PDF as a buffer
  const result = await cloudinary.api.resource(publicId, { resource_type: 'raw' });
  const url = result.secure_url;

  const axios = require('axios');
  const response = await axios.get(url, { responseType: 'arraybuffer' });
  const data = await pdfParse(response.data);
  return data.text;
}

module.exports = cloudinary;
