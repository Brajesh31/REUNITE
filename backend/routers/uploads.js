const express = require('express');
const uploadsRouter = express.Router();
const multer = require('multer');
const path = require('path');
const { COUNTER } = require('../models/counter');

const { createItem } = require('../controllers/item');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/upload');
    },
    filename: async (req, file, cb) => {
        // cb(null, file.originalname);
        cb(null, file.originalname);
    },
    limits: {
        fileSize: 10 * 1024 * 1024, // 10 MB in bytes
    },
});

const upload = multer({ storage: storage });

uploadsRouter.post('/upload', upload.fields([
    { name: 'image', maxCount: 1 },
]), createItem)

module.exports = uploadsRouter;
