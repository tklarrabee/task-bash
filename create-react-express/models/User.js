const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
mongoose.promise = Promise

function emailValidator(email) {
    const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test(email)
}

const UserSchema = new Schema({

    first_name: {
        type: String,
        required: false
    },

    last_name: {
        type: String,
        required: false
    },

    user_name: {
        type: String,

        validate: [emailValidator, 'Please Enter a Valid Email']

    },

    password: {
        type: String,
        required: true
    },

    projects: [{type: Schema.Types.ObjectId, ref: 'Project'}],

    shared_projects: [{type: Schema.Types.ObjectId, ref:'Share'}],

    pending_invites: [{type: Schema.Types.ObjectId, ref: 'Share'}]
});

UserSchema.methods = {
    checkPassword: function(inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password)
    },
    hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

UserSchema.pre('save', function (next) {
	if (!this.password) {
		console.log('models/user.js =======NO PASSWORD PROVIDED=======')
		next()
	} else {
		console.log('models/user.js hashPassword in pre save');
		
		this.password = this.hashPassword(this.password)
		next()
	}
})


const User = mongoose.model('User', UserSchema);

module.exports = User;
