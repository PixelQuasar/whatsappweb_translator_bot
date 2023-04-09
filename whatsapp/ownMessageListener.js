const initTranslate = require("../translator/initTranslate")
const mailTask = require("../mailer/mailTask")
const config = require("../config.json")


function ownMessageListener(client, message) {
    const content = message.body // raw message text
    if (content.includes(config.langPrefix)){
        console.log("translate function")
        initTranslate(message)
    }
}

module.exports = ownMessageListener
