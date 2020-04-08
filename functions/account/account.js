const express = require('express');
const account = require("./routes/account");
// const connectDB = require("./config/db");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const serverless = require('serverless-http');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// connecting the Mongo DB during server start up
// connectDB();

app.use("/.netlify/functions/account", account);

module.exports.handler = serverless(app);