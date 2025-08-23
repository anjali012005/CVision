const { verifyToken } = require("../utils/jwt");

module.exports = function auth(req, res, next) {
  // Path A: read token from Authorization header
  let token = null;
  const authHeader = req.headers.authorization;
  if (authHeader?.startsWith("Bearer ")) token = authHeader.split(" ")[1];

  try {
    const decoded = verifyToken(token);
    req.user = decoded; // { id, email, name }
    next();
  } catch {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
