const tags = require("../config.json").langtags

function prepare(str){ //cleaning message from unnessesary symbols
    for (const tag in tags) str = str.replace(tag, "")
    return str.trimStart() 
}

module.exports = prepare
