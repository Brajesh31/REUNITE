const express = require('express');
const cors = require('cors');

const path = require('path');
const app = express();

const PORT = process.env.PORT || 4000;

// CUSTOM MODULES

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

// ROUTERS
const pagesRouter = require('./routers/pages');

// ROUTES
app.use('/', pagesRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});