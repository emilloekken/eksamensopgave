const express = require('express');
const router = express.Router();
const User = require('../Models/user');

router.post('/', (req, res) => {
    console.log(req.body);
})