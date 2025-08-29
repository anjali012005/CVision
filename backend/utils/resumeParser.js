const fs = require('fs');
const pdfParse = require('pdf-parse');
const mammoth = require('mammoth'); // DOCX parser
const axios = require('axios');
const cloudinary = require('cloudinary').v2;

// ---------------- Cloudinary Config ----------------
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "dhgvr5h7p",
  api_key: process.env.CLOUDINARY_API_KEY || "794318277514614",
  api_secret: process.env.CLOUDINARY_API_SECRET || "IwUveoNtH_VhtDMQyMTjbWJ7y4I"
});

// ---------------- PDF Extraction ----------------
async function extractPdfText(filePathOrUrl) {
  try {
    let dataBuffer;

    if (filePathOrUrl.startsWith('http')) {
      const response = await axios.get(filePathOrUrl, { responseType: 'arraybuffer' });
      dataBuffer = response.data;
    } else {
      dataBuffer = fs.readFileSync(filePathOrUrl);
    }

    const data = await pdfParse(dataBuffer);
    return data.text;

  } catch (err) {
    console.error("Error extracting PDF text:", err.message);
    throw err;
  }
}

// ---------------- DOCX Extraction ----------------
async function extractDocxText(filePathOrUrl) {
  try {
    let dataBuffer;

    if (filePathOrUrl.startsWith('http')) {
      const response = await axios.get(filePathOrUrl, { responseType: 'arraybuffer' });
      dataBuffer = response.data;
    } else {
      dataBuffer = fs.readFileSync(filePathOrUrl);
    }

    const result = await mammoth.extractRawText({ buffer: dataBuffer });
    return result.value;

  } catch (err) {
    console.error("Error extracting DOCX text:", err.message);
    throw err;
  }
}

// ---------------- Cloudinary PDF Extraction (public or private) ----------------
async function extractPdfFromCloudinary(publicId, isPrivate = false) {
  try {
    let url;

    if (isPrivate) {
      // Generate signed URL for private/raw PDF (expires in 5 minutes)
      url = cloudinary.utils.private_download_url(publicId, {
        resource_type: 'raw',
        type: 'authenticated',
        expires_at: Math.floor(Date.now() / 1000) + 300
      });
    } else {
      // Public URL
      const result = await cloudinary.api.resource(publicId, { resource_type: 'raw' });
      url = result.secure_url;
    }

    const response = await axios.get(url, { responseType: 'arraybuffer' });
    const data = await pdfParse(response.data);
    return data.text;

  } catch (err) {
    console.error("Error extracting PDF from Cloudinary:", err.message);
    throw err;
  }
}

// ---------------- General Resume Extractor ----------------
async function extractResumeText(filePathOrUrl, format) {
  if (format.toLowerCase() === 'pdf') return await extractPdfText(filePathOrUrl);
  if (format.toLowerCase() === 'docx') return await extractDocxText(filePathOrUrl);
  throw new Error("Unsupported format. Only PDF and DOCX are allowed.");
}

// ---------------- Exports ----------------
module.exports = {
  extractResumeText,
  extractDocxText,
  extractPdfText,
  extractPdfFromCloudinary,
};
