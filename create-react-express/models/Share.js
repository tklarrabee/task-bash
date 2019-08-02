const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ShareSchema = new Schema({

    accepted: {
        type: Boolean,
        required: true,
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
    }
})

const Share = mongoose.model('Project', ProjectSchema);

module.exports = Share;
