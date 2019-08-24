const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.promise = Promise


const ElementSchema = new Schema({

    body: {
        type: String,
        required: true
    },

    label: {
        type: String,
        required: false
    },

    title: {
        type: String,
        required: false
    },
    // date: {
    //     type: Date,
    //     required: false
    // },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

});

const Element = mongoose.model('Element', ElementSchema);

module.exports = Element;
