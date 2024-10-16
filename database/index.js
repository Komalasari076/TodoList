require("dotenv").config();
const mongoose = require("mongoose");

const databaseURL = process.env.databaseURL;

const database = mongoose.connect(databaseURL);

module.exports = database;
