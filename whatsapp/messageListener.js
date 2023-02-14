const initTranslate = require("../translator/prepare")
const mailTask = require("../mailer/mailTask")
const config = require("../config.json")


function messageListener(message) {
    const content = message.body // raw message text
    if (content.includes(config.langPrefix)){
        initTranslate(client, message)
    }
    if (message.body.includes(config.mailPrefix)){
        mailTask(client, message)
    }
}

module.exports = messageListener
