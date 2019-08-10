import axios from 'axios'

        //request to server to add a new username/password
        
const UserRegistration = data => {
    axios.post('/user', {
        username: data.username,
        password: data.password
    })
        .then(response => {
            console.log(response)
            if (!response.data.errmsg) {
                console.log('successful signup')

            } else {
                console.log('username already taken')
            }
            return response.status
        }).catch(error => {
            console.log('signup error: ')
            console.log(error)

        })
}

export default UserRegistration;