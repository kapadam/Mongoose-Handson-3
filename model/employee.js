const mongoose = require("mongoose");

const informationSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    salary: Number,
    department: String,
    lastCompany: String,
    lastSalary: Number,
    overallExp: Number,
    contactInfo: String,
    yearGrad: Number,
    gradStream: String
});

const Information = mongoose.model("employee", informationSchema)

module.exports = {Information};