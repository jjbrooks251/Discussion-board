const mongoose = require('mongoose');
const Schemea = mongoose.Schema;

var contentSchema = new Schemea({
    username: String,
    message: String

});

const item = mongoose.model('Content', contentSchema);
module.exports = contentSchema;
module.exports = item;