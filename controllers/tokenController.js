const { Token } = require("../models/token");
exports.validate_token = async (token) => {
  return await Token.findOne({
    token,
  });
};
