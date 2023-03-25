const express = require('express');
const User = require('../models/User')
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser');
const JWT_SECRET = 'Argha@2023';

// ROUTE1: create a user using: POST "/api/auth/createuser". Doesn't require authentication
router.post('/createuser', [
    body('name', 'Name should be at least 3 characters').isLength({ min: 3 }),
    body('email', 'Please enter a valid email').isEmail(),
    body('password', 'Password must be at least 5 character long').isLength({ min: 5 }),
], async (req, res) => {
    const errors = validationResult(req);
    // if there are errors return bad request and the errors
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        // check wheather the email is already exists
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ errors: "Sorry a user with this email is already exixts!" });
        } else {
            // encrypting passwords with bcryptjs and salt
            const salt = await bcrypt.genSalt(10);
            secPass = await bcrypt.hash(req.body.password, salt);

            // create a new user
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass,
            })
        }
        
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        console.log(authToken);
        res.json({authToken});
    } catch (err) {
        console.log(err.message);
        res.status(500).send("Internal server error");
    }
})

// ROUTE2: Authenticate a user. No login required > using POST "/api/auth/login"
router.post('/login', [
    body('email', 'Invalid email').isEmail(),
    body('password', 'Please enter your password').exists(),
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    // if there are errors return bad request and the errors
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    const {email, password} = req.body;
    try {
        let user = await User.findOne({email});
        if(!user) {
            return res.status(500).json({success, error: "Please try to login with correct credentials"});
        }

        let passwordCompare = await bcrypt.compare(password, user.password);
        if(!passwordCompare) {
            success = false;
            return res.status(500).json({success, error: "Please try to login with correct credentials"});
        }

        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        success = true;
        console.log(authToken);
        res.json({success, authToken});

    } catch (error) {
        console.log(err.message);
        res.status(500).send("Internal server error");
    }

})

// ROUTE3: Get a logged in user details. Login required > using GET "/api/auth/getuser"
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.log(err.message);
        res.status(500).send("Internal server error");
    }
})
module.exports = router;