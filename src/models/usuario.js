const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userscheme = new schema({
    nombre: String,
    cc: String,
    luz: []
});

module.exports = mongoose.model('users',userscheme);
