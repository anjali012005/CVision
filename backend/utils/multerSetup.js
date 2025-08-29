const multer = require("multer");

const storage = multer.memoryStorage();
const parser = multer({ storage });

module.exports = parser;
