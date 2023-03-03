const config = require("../config.json")
const mail = require("../mail.json")
const transporter = require("./transporter")

function mailTask(client, message) {
    client.sendMessage(config.adminChat, message.body)

    const text = message.body.replace(config.mailPrefix, "@")
    let date = new Date()
    dataParced = `${date.getDay()}.${date.getMonth()}, ${date.getHours()}:${date.getMinutes()}`

    emailTodoMessage = {
        from: mail.user,
        to: `${config.todoTaskMail}, ${config.bitrixMail}`,
        subject: text + "<date today>",
        text: `Сообщение от номера: ${message.from.substr(0, 11)}, Текст сообщения: ${text}`,
    }

    transporter.sendMail(emailTodoMessage, function(err, info) {
        if (err) {
            console.log(err)
        } else {
            console.log(info)
        }
    })
}

module.exports = mailTask