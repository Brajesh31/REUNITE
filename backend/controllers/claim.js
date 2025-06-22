const { ITEM } = require('../models/item');
const claim = async (req, res) => {
    const { userId, username } = req.body.payload;

    const {itemId:itemId} = req.params;

const updateClaim = await ITEM.findOneAndUpdate(
  { _id: itemId },
  { $push: { claimers: username } },
  { new: true }
);
res.status(200).json(`user : ${username} claimed item ${itemId}`)

}

module.exports = { claim };