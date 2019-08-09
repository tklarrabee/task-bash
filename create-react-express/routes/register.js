// const authController = require('../controllers/authController')
// const express = require('express');
// const registrationRoutes = express.Router();
let Registration = require('../models')
// const bcrypt = require('bcryptjs');
// let db = require('../models');

module.exports = function (app) {
app.post('/register', function(req, res) {
	const { user_name, password, first_name, last_name } = req.body
	let register = new Registration.User(req.body);
	register.save()
		.then(reg => {
			res.sendStatus(200);
		})
		.catch(err => {
			res.status(400).send('Failed to store to db');
		})
})
}
// module.exports = registrationRoutes;

// module.exports = function (app, passport, db) {
// 	app.post('/register', function(req, res) {
// 		const { user_name, password, first_name, last_name } = req.body
// 		console.log(req.body)
// 		let register = new db.User(req.body);
// 		register.save()
// 			.then(reg => {
// 				res.sendStatus(200);
// 			})
// 			.catch(err => {
// 				res.status(400).send("Failed to Store, homie");
// 			})
// 	})
	// , {
	// 	successRedirect: '/board',
	// 	failureRedirect: '/signup'
	// }



	// Username validation Router
	// app.post('/validateUsername', function (req, res) {
	// 	db.User.findOne({ user_name: req.body.user_name })
	// 		.then(user => user ? res.sendStatus(204) : res.sendStatus(200))
	// });

	//app.get('/dashboard', isLoggedIn, authController.dashboard)

	//app.get('/logout', authController.logout)

	

// 	function isLoggedIn(req, res, next) {
// 		if (req.isAuthenticated()) { return next() }

// 		res.redirect('/login')
// 	}

// 	app.post('/login', passport.authenticate('local-signin', {
// 		successRedirect: '/board',

// 		failureRedirect: '/login'
// 	}

// 	))
// }


// // Registration route
// registrationRoutes.route('/signup').post(function (req, res) {
// 	let register = new db.User(req.body);
// 	register.save()
// 		.then(reg => {
// 			res.sendStatus(200);
// 		})
// 		.catch(err => {
// 			res.status(400).send("Failed to store to database");
// 		});
// });

// // Login Router
// registrationRoutes.route('/login').post(function (req, res) {
// 	db.User.findOne({user_name: req.body.user_name})
// 	.then(user => {
// 		console.log("User from login", user)
// 		if(!user) res.sendStatus(204);
// 		else {
// 			bcrypt.compare(req.body.password, user.password)
// 			.then(passwordMatch => passwordMatch ? res.sendStatus(200) : res.sendStatus(204))
// 		}
// 	})
// });



// // Get allData
// registrationRoutes.route('/allData').get(function (req, res) {
// 	db.User.find((err, data) => err ? res.status(400).send("Error occured") : res.json(data));
// });

// module.exports = registrationRoutes;