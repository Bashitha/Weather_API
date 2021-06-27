const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
  token: String,
});

const Token = mongoose.model("Token", tokenSchema);

exports.Token = Token;
