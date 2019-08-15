const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.promise = Promise

const ProjectSchema = new Schema({

    name: {
        type: String,
        required: true
    },

    // columns: [{type: Schema.Types.ObjectId, ref: 'Column'}],

    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
    //,
    //  members: [{type: Schema.Types.ObjectId, ref: 'Share'}]
});

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
