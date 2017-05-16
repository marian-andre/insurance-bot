const recastai = require('recastai').default

const { replyMessage, replyText } = require('./message')

// Instantiate Recast.AI SDK
const client = new recastai(process.env.REQUEST_TOKEN)

export const bot = (body, response, callback) => {
  if (body.message) {
    client.connect.handleMessage({ body }, response, replyMessage)

    // for hosting
    callback(null, { result: 'Bot answered :)' })
  } else if (body.text) {
    replyText(body.text, 'abcd')
      .then(reply => {
        callback(null, { reply })
      })
      .catch(err => {
        callback(err)
      })
  } else {
    callback('No text provided')
  }
}
