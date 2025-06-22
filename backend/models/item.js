const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: [true, "please provide name"],
    },
    imageName: {
        type: String,
    },
    imageURL: {
        type: String,
    },
    // submitterId: {
    //     type: String,
    //     required: [true, "please provide submitter id"],
    // },
    description: {
        type: String,
        required: [true, "please provide description"],
    },
    locationCoordinates: {
        lat: {
            type: Number,
        },
        long: {
            type: Number,
        }// {lat: 123, long: 123}
    },
    location: {
        type: String,
        required: [true, "please provide your location"],
    },
    timeReported: {
        type: Date,
        required: true,
        default: Date.now()
    },
    claimers: {
        type: Array,
        required: true,
        default: []
    },
});

const item = mongoose.model('item', itemSchema);

module.exports = {
    ITEM: item
};