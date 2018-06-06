# mailer-pure

[![version](https://img.shields.io/badge/version-v1.0.0-green.svg)](https://github.com/soonfy/mailer-pure)

[![build](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/soonfy/mailer-pure)
[![coverage](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)](https://github.com/soonfy/mailer-pure)

[![npm](https://img.shields.io/badge/npm-v5.0.0-orange.svg)](https://github.com/soonfy/mailer-pure)
[![node](https://img.shields.io/badge/node-%3E%3Dv8.0.0-orange.svg)](https://github.com/soonfy/mailer-pure)

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/soonfy/mailer-pure)

### purpose

  > study send mail.

### install

```bash
npm i -D mailer-pure
```

### config test

```bash
npm test
```

### cover test

```bash
npm run cover
```

### usage

```js
const fs = require('fs')
const path = require('path')

const Mailer = require('mailer-pure')
const mailer = new Mailer(<email>, <pass>)

const send = async () => {
  const data = await mailer.send({
    to: <to email>,
    subject: <subject>,
    html: fs.createReadStream(path.resolve(__dirname, <path/to/file>)),
    attachments: [{
      filename: <filename>,
      content: fs.createReadStream(path.resolve(__dirname, <path/to/file>))
    }]
  })
  console.info(data)
}

send()
```

### License

[MIT](LICENSE)

### knowledge

1. nodemailer --> `https://nodemailer.com/about/`

1. [editorconfig](.editorconfig)

1. [travis](.travis.yml)

1. license

    > MIT --> `https://opensource.org/licenses/MIT`

1. badge

    > shields --> `https://shields.io/`

1. cover

    > istanbul --> `https://www.npmjs.com/package/istanbul`
