const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const ElementSchema = new Schema({

    body: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: false
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    column: {
        type: Schema.Types.ObjectId,
        ref: 'Column',
    }


});

const Element = mongoose.model('Element', ElementSchema);

module.exports = Element;
