import axios from 'axios';

const LoginService = data => (
	axios.post('signin/login', data)
		.then(res => res.status)
)

export default LoginService;
