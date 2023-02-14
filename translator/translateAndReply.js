const translator = require('bing-translate-api')

function transateAndReply(lang, text, callback) {
    console.log(lang, text)
    translator.translate(text, null, lang, true).then(res => {
        console.log(res.translation)
        callback(res.translation)
        return res.translation
    }).catch(err => {
        console.error(err)
        return "ERROR:" + err
    })
}

module.exports = transateAndReply
