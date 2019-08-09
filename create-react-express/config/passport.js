// load bcrypt
const bCrypt = require('bcrypt-nodejs')

module.exports = function (passport, user) {
  const User = user
  const LocalStrategy = require('passport-local').Strategy

  // serialize
  passport.serializeUser(function (user, done) {
    done(null, user.id)
  })

  // used to deserialize the user
  passport.deserializeUser(function (id, done) {
    User.findByPk(id).then(function (user) {
      if (user) {
        done(null, user.get())
      } else {
        done(user.errors, null)
      }
    })
  })

  passport.use('local-signup', new LocalStrategy(
    {
      usernameField: 'user_name',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },

    function (req, username, password, done) {
      var generateHash = function (password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null)
      }

      User.findOne({
        where: {
          user_name: username
        }
      }).then(function (user) {
        if (user) {
          return done(null, false, {
            message: 'That email is already taken'
          })
        } else {
          var userPassword = generateHash(password)
          var data =
                    {
                      user_name: username,
                      password: userPassword,
                      first_name: req.body.first_name,
                      last_name: req.body.last_name
                    }
          const newUser = new User(data);
          newUser.save(err => {
            if(err) { return done(err); }

            return done(null);
        })
          // User.create(data).then(function (newUser, created) {
          //   if (!newUser) {
          //     return done(null, false)
          //   }
          //   if (newUser) {
          //     return done(null, newUser)
          //   }
          // })
        }
      })
    }
  ))

  // LOCAL SIGNIN
  passport.use('local-signin', new LocalStrategy(
    {
      // by default, local strategy uses username and password, we will override with email
      usernameField: 'user_name',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },

    function (req, username, password, done) {
      var User = user
      var isValidPassword = function (userpass, password) {
        return bCrypt.compareSync(password, userpass)
      }

      User.findOne({
        where: {
          username: username
        }
      }).then(function (user) {
        if (!user) {
          return done(null, false, {
            message: 'Email does not exist'
          })
        }

        if (!isValidPassword(user.password, password)) {
          return done(null, false, {
            message: 'Incorrect password.'
          })
        }

        var userinfo = user.get()
        return done(null, userinfo)
      }).catch(function (err) {
        console.log('Error:', err)
        return done(null, false, {
          message: 'Something went wrong with your Signin'
        })
      })
    }
  ))
}