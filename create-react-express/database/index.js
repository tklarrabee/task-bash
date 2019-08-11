//Connect to Mongo database
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//your local database url
//27017 is the default mongoDB port
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/taskBash';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }).then(
    () => { 
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ 
        console.log('Connected to Mongo');
        
    },
    err => {
         /** handle initial connection error */ 
         console.log('error connecting to Mongo: ')
         console.log(err);
         
        }
  );

//   module.exports = {
//     Project: require('./models/Project'),
//     Column: require('./models/Column'),
//     Element: require('./models/Element'),
//     User: require('./models/User'),
//     Share: require('./models/Share')
// }
module.exports = mongoose.connection