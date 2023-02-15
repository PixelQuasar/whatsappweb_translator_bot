const nodemailer = require('nodemailer')
const mail = require("../mail.json")

const transporter = nodemailer.createTransport({
    host: mail.host,
    port: 25,
    auth: {
        user: mail.user,
        pass: mail.password
    }
})

module.exports = transporter