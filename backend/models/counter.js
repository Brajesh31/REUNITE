const mongoose = require('mongoose');

const counterSchema = new mongoose.Schema({
    counter: {
        type: Number,
    }
});

const counter = mongoose.model('counter', counterSchema);

module.exports = {
    COUNTER: counter
};