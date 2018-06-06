const nodemailer = require('nodemailer')

class Mailer {
  constructor (email, pass, name, host) {
    const pos = email.lastIndexOf('@')
    name = name || email.slice(0, pos)
    host = host || `smtp.${email.slice(pos + 1)}`
    this.email = email
    this.pass = pass
    this.name = name
    this.host = host
  }

  send (option) {
    const {to, subject, html, attachments} = option
    const transporter = nodemailer.createTransport({
      host: this.host,
      port: 465,
      secureConnection: true,
      auth: {
        user: this.email,
        pass: this.pass
      }
    })
    const mail = {
      from: `"${this.name}" <${this.email}>`,
      to,
      subject,
      html,
      attachments
    }
    return new Promise((resolve, reject) => {
      transporter.sendMail(mail, (err, info) => {
        if (err) {
          reject(err)
        } else {
          resolve(info)
        }
      })
    })
  }
}

module.exports = Mailer
