const axios = require('axios')
const colors = require('colors')

module.exports = async () => {
  const url = 'https://favqs.com/api/qotd'

  try {
    const response = await axios.get(url)

    const quote = response.data.quote.body
    const author = response.data.quote.author
    const wrappedText = quote.replace(
      /(?![^\n]{1,60}$)([^\n]{1,60})\s/g,
      '$1\n'
    )

    console.log(`"${wrappedText}"\n`)
    console.log(`- ${author}`.green)
  } catch (error) {
    console.error('ERROR'.red.inverse, `${error.message}`)
  }
}
