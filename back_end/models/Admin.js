const express = require("express");
const { Schema } = express;

const adminSchema = new Schema({
    name: {
        firstName: String,
        lastName: String,
    },
    username: String,
    password: String,
    gender: String,
    avatar: Buffer,
    assignedCollege: String,
    contact: {
        phone: String,
        cellphone: String,
    },
    address: {
        houseNumber: String,
        building: String,
        street: String,
        city: String,
        province: String,
        country: String,
    },
});
