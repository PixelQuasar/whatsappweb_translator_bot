const prepare = require("./prepareToTranslate")
const transateAndReply = require("../translator/translateAndReply")
const config = require("../config.json")

function messageListener(message) {
    const content = message.body // raw message text
    if (content.includes(config.prefix)){
        //init translation funcs
        const text = prepare(content) // pure message without transpation tags
        for (const tag in config.langtags) { // run translate for every possible tag in message
            if (content.includes(tag)) {
                transateAndReply(config.langtags[tag], text, message) // eng translate
            }
        }
    }
}

module.exports = messageListener
