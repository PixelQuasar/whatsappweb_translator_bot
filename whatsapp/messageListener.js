const prepare = require("./prepareToTranslate")
const transateAndReply = require("../translator/translateAndReply")

function messageListener(message) {
    const content = message.body
    console.log(content)
    if (content.includes("#")){
        const text = prepare(content)
        if (content.includes("#e")) {
            console.log("stage 1")
            transateAndReply("en", text, message.reply)
            //console.log(translatedText)
        }
        if (content.includes("#r")) {
            const translatedText = transateAndReply("ru", text, message.reply)
        }
        if (content.includes("#t")) {
            const translatedText = transateAndReply("tr", text, message.reply)
        }
    }
}

module.exports = messageListener
