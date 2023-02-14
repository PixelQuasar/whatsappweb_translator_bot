const prepare = require("./prepare")
const transateAndReply = require("./translateAndReply")

function initTranslation(client, message) {
  const content = message.body
  //init translation funcs
  const text = prepare(content) // pure message without transpation tags
  for (const tag in config.langtags) {
    // run translate for every possible tag in message
    if (content.includes(tag)) {
      transateAndReply(config.langtags[tag], text, message) // eng translate
    }
  }
}

module.exports = initTranslation
