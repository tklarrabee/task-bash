const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.promise = Promise


const ColumnSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: 'Project'
    },
    index: {
        type: Number,
        required: true
    }

    // elements: [{type: Schema.Types.ObjectId, ref: 'Element'}]
})

const Column = mongoose.model('Column', ColumnSchema);

module.exports = Column;
