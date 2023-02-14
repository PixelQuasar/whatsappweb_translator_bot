function prepare(str){
    return str.replace("#e", "").replace("#r", "").replace("#t", "").trimStart()
}

module.exports = prepare
