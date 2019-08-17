const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.promise = Promise

const ProjectSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    description: {
        type: String,
        required: false
    },

    columns: [{type: Schema.Types.ObjectId, ref: 'Column'}],


});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
