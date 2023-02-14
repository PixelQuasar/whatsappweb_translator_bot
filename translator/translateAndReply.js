const translator = require('bing-translate-api')

function transateAndReply(lang, text, message) {
    translator.translate(text, null, lang, true).then(res => { // bing chilling
        message.reply(res.translation) // running whatsapp web reply function with the translated text.
        return res.translation
    }).catch(err => {
        console.error(err)
        return "ERROR:" + err
    })
}

module.exports = transateAndReply
