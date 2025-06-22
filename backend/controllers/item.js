require('dotenv').config();

const { ITEM } = require('../models/item');
const { COUNTER } = require('../models/counter');
const path = require('path');

const getData = async (req, res) => {
    console.log(req.body.payload);

    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page - 1) * limit;

    let result = ITEM.find({});

    // result = result.skip(skip).limit(limit);

    const items = await result;
    res.status(200).json({ items });
}
// submitterId: '1234567890',
const createItem = async (req, res) => {

    // let value = await COUNTER.findOne({});

    // if (!value) {
    //     value = await COUNTER({ counter: 1 });
    //     await value.save();
    // }

    let data = {
        itemName,
        description,
        locationCoordinates,
        location
    } = req.body;

    // data.submitterId = req.body.payload.userId;

    let extraData = {
        // submitterId: '1234567890',
        imageName: req.files.image[0].originalname,
        imageURL: `http://localhost:3000/upload/${req.files.image[0].originalname}`
    }

    data = { ...data, ...extraData };

    if (!data) {
        res.status(400).json({ error: "Please provide data to create an item" });
    }

    const item = await ITEM(data);
    await item.save();

    // value.counter = value.counter + 1;
    // await COUNTER.updateOne({ _id: value._id }, { $set: { counter: value.counter } });

    res.status(200).redirect('http://localhost:4000/');
}



module.exports = { getData, createItem };