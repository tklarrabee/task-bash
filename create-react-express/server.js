const express = require("express");
const bodyParser = require('body-parser')
const path = require("path");
const session = require("express-session")
// const morgan = require("morgan")
const dbConnection = require("./database");
const MongoStore = require('connect-mongo')(session);
const passport = require("./passport");
const user = require('./routes/user');
const collaborate = require('./routes/collaborate');
const project = require('./routes/project');
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/taskBash';

mongoose.connect(
  MONGODB_URI, { useNewUrlParser: true }, (err, res) => {
  if(err) console.log('ERROR connecting to: ' + MONGODB_URI + '. ' + err)
  else console.log('Succeded connected to: ' + MONGODB_URI)
});
app.use(
  session({
    secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
  })
)


// Define middleware here
// app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser


// Define API routes here
app.use('/user', user)
app.use('/share', collaborate)
app.use('/project', project)


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
