require("dotenv").config();

console.log("ENV SECRET:", process.env.JWT_adminSECRET);

module.exports = {
    JWT_adminSECRET: process.env.JWT_adminSECRET,
    JWT_userSECRET: process.env.JWT_userSECRET
};