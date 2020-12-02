const express = require('express'); 
const router = express.Router(); 

const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    FirstName: {
        type: String, 
        required: true
    }, 
    LastName: {
        type: String, 
        required: true
    }, 
    EmailAdress: {
        type: String, 
        required: true
    }, 
    Password: {
        type: String, 
        required: true
    }
})

module.exports = mongoose.model('Posts', UserSchema)