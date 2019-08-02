const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ColumnSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project'
    },

    elements: [{type: Schema.Types.ObjectId, ref: 'Element'}]
})

const Column = mongoose.model('Column', ColumnSchema);

module.exports = Column;
