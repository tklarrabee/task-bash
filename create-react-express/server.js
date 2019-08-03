const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const axios = require("axios");
const db = require("./models");
const morgan = require("morgan");
const cors = require('cors');


const PORT = process.env.PORT || 3001;
const app = express();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/taskBash';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, (err, res) => {
  if(err) console.log('ERROR connecting to: ' + MONGODB_URI + '. ' + err)
  else console.log('Succeded connected to: ' + MONGODB_URI)
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json())
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
