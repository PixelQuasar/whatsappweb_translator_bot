const whatsapp = require('whatsapp-web.js')
const qrcode = require("qrcode-terminal")
const messageListener = require("./messageListener.js")
const ownMessageListener = require('./ownMessageListener.js')

const client = new whatsapp.Client( { 
    puppeteer: { 
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
})

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
	messageListener(client, message)
}) 

client.on('message_create', message => {
    if (message.from == "77017124220@c.us") ownMessageListener(client, message)
}

module.exports = client