const express = require('express');
const cors = require('cors');

const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// CUSTOM MODULES

const { CONNECT } = require('./models/database');
// const { VERIFYTOKEN } = require('./authentication/jwt');

// CONNECT TO DATABASE
CONNECT();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

// ROUTERS
const claimRouter = require('./routers/claim');
const userRouter = require('./routers/user');
const uploadsRouter = require('./routers/uploads');
const itemRouter = require('./routers/item');

// ROUTES
app.use('/claim', claimRouter);
app.use('/user', userRouter);
app.use('/uploads', uploadsRouter);
app.use('/item', itemRouter);

// //api route to serve images
// const fs = require('fs');

// app.get('/api/images', (req, res) => {
//     const uploadFolderPath = path.join(__dirname, 'public', 'upload');

//     fs.readdir(uploadFolderPath, (err, files) => {
//         if (err) {
//             console.error('Error reading upload folder:', err);
//             res.status(500).json({ error: 'Failed to retrieve images' });
//         } else {
//             const images = files.filter(file => {
//                 const extension = path.extname(file).toLowerCase();
//                 return extension === '.jpg' || extension === '.jpeg' || extension === '.png';
//             });

//             res.json({ images });
//         }
//     });
// });

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});