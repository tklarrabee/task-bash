import axios from 'axios';
// import bcrypt from 'bcryptjs';

// export const UserRegistration = ()  => {
export const UserRegistration = data => {
	// const password = data.password;
	// const salt = bcrypt.genSaltSync(10);
	// const hash = bcrypt.hashSync(password, salt);

	// data["password"] = hash;

	// axios.post('/signup')
	console.log('USER REGISTRATION =======> ', data)
	axios.post('/register', data)
		.then(res => res.status)
}

export const UsernameValidation = data => (
	axios.post('/validateUsername', data)
		.then(exist => exist.status)
)