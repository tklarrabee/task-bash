const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.promise = Promise


const ShareSchema = new Schema({

    accepted: {
        type: Boolean,
        default: false
    },

    project: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Project'
    },

    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },

    invited_by: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

const Share = mongoose.model('Share', ShareSchema);

module.exports = Share;
