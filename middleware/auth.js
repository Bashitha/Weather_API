const { validate_token } = require("../controllers/tokenController");

module.exports = async function (req, res, next) {
  const token = req.header("authentication");

  if (!token) return res.status(401).send("Access denied. No token provided.");
  try {
    const validatedToken = await validate_token(token);
    if (!validatedToken) {
      throw new Error("Invalid Token");
    }
    next();
  } catch (ex) {
    res.status(400).send("Invalid Token.");
  }
};
