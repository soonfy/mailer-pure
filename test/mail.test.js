const fs = require('fs')
const path = require('path')

const Mailer = require('../index')
// email, pass
const mailer = new Mailer('email', 'pass')

const send = async () => {
  const data = await mailer.send({
    to: 'soonfy@163.com',
    subject: 'happy',
    html: fs.createReadStream(path.resolve(__dirname, '../email-template/login.html')),
    attachments: [{
      filename: 'login email',
      content: fs.createReadStream(path.resolve(__dirname, '../email-template/login.html'))
    }]
  })
  console.info(data)
}

send()
