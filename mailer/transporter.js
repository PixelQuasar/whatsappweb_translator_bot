const nodemailer = require('nodemailer')
const config = require("../config.json")

const transporter = nodemailer.createTransport({
    host: config.host,
    port: 25,
    auth: {
        user: config.mail.user,
        pass: config.mail.password
    }
})

module.exports = transporter