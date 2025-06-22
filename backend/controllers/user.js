require('dotenv').config();
const bcrypt = require('bcrypt');

// CUSTOM MODULES

const { USER } = require('../models/user');
// const { GENERATETOKEN } = require('../authentication/jwt');

const login = async (req, res) => {
    let data = { email, password } = req.body;

    let user = await USER.findOne({ email: data.email });

    if (!user) {
        return res.redirect('http://localhost:4000/login');
    }

    const match = await bcrypt.compare(data.password, user.password);

    if (match) {
        // let payload = {
        //     userId: user._id,
        //     username: user.username,
        // }
        // const accessToken = GENERATETOKEN(payload, "30d")
        res.status(200).redirect('http://localhost:4000/');
    }

    if (!match) {
        console.log('here');
        return res.redirect('http://localhost:4000/login');
    }
}

const register = async (req, res) => {
    try {

        let data = { username, email, password } = req.body;

        const user = await USER.findOne({ email: data.email });

        if (user) {
            return res.status(400).redirect('http://localhost:4000/register');
        }

        const salt = await new Promise((resolve, reject) => {
            bcrypt.genSalt(Number(process.env.SALTROUNDS), (err, salt) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(salt);
                }
            });
        });

        const hash = await new Promise((resolve, reject) => {
            bcrypt.hash(password, salt, (err, hashedPassword) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(hashedPassword);
                }
            });
        });

        data.password = hash;

        let newUser = new USER(data);
        newUser.save()
            .then((user) => {
                res.status(200).redirect('http://localhost:4000/login');
            }
            ).catch((err) => {
                res.status(500).json({ error: err });
            });
    } catch (err) {
        console.log(err);
    }
}

module.exports = { login, register };