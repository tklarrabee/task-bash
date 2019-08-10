const express = require("express");
const bodyParser = require("body-Parser");
const morgan = require("morgan");
const session = require("express-session");
const db = require("./models");
const MongoStore = require('connect-mongo')(session)
const path = require("path");
const mongoose = require("mongoose");
const axios = require("axios");



const PORT = process.env.PORT || 3001;
const app = express();

const passport = require('./passport')(app, db.User);

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/taskBash';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, (err, res) => {
  if(err) console.log('ERROR connecting to: ' + MONGODB_URI + '. ' + err)
  else console.log('Succeded connected to: ' + MONGODB_URI)
});

// Define middleware here
app.use(morgan("dev"))
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(bodyParser.json())

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: db.User }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
// app.use(passport.initialize())
// app.use(passport.session()) // calls the deserializeUser

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
require('./routes/user')(app, passport, db.User)
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
