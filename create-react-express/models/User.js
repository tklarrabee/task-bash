const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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

    email: {
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

const User = mongoose.model('User', UserSchema);

module.exports = User;
