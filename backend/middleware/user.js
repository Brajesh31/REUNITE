function validateUserData(req, res, next) {
    const { username, email, password, confirmPassword } = req.body;

    if (!username || !email || !password || !confirmPassword) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    if (username.length < 2) {
        return res.status(400).json({ message: 'Invalid Username' });
    }

    if (password.length < 6) {
        return res.status(400).json({ message: 'Password should be at least 6 characters long' });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    next();
}

function validateItem(req, res, next) {
    const { itemName, description, location } = req.body;

    if (!itemName || !description || !location) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    if (itemName.length < 2) {
        return res.status(400).json({ message: 'Invalid Item Name' });
    }

    if (description.length < 6) {
        return res.status(400).json({ message: 'Description should be at least 6 characters long' });
    }

    if (location.length < 2) {
        return res.status(400).json({ message: 'Invalid Location' });
    }

    next();
}

module.exports = {
    VALIDATEREGISTER: validateUserData,
    VALIDATEITEM: validateItem
};