const config = require("../config.json")
const mail = require("../mail.json")
const transporter = require("./transporter")

function mailTask(client, message) {
    client.sendMessage(config.adminChat, message.body)
    const text = message.body.replace(config.mailPrefix, "@")

    let date = new Date()
    dataParced = `${date.getDay()}.${date.getMonth()}, ${date.getHours()}:${date.getMinutes()}`
    message = {
        from: mail.user,
        to: config.todoTaskMail,
        subject: text + "<date today>",
        text: `Сообщение от номера: ${author.substr(
        0,
        11
        )}, Текст сообщения: ${text}`,
    }
    transporter.sendMail(message, function(err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log(info)
        }
    })
}

module.exports = mailTask