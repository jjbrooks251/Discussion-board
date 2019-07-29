const mongoose = require('mongoose');
const Schemea = mongoose.Schema;

var contentSchema = new Schemea({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const item = mongoose.model('Content', contentSchema);
module.exports = contentSchema;
module.exports = item;