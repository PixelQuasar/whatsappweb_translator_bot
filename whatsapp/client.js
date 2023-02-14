const whatsapp = require('whatsapp-web.js')
const client = new whatsapp.Client()
const qrcode = require("qrcode-terminal")
const messageListener = require("./messageListener.js")

// on QR receiving
client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true})
})

// on client setting up
client.on('ready', () => {
    console.log('Client is ready!')
})

// on new text message
client.on('message', (message) => {
    console.log("message received")
	messageListener(message)
})
 
module.exports = client