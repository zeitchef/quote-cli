const axios = require('axios')
const colors = require('colors')

const url = 'https://favqs.com/api/qotd'

async function getQuote() {
  try {
    const response = await axios.get(url)
    const quote = response.data.quote.body
    const author = response.data.quote.author

    const wrapped = quote.replace(/(?![^\n]{1,60}$)([^\n]{1,60})\s/g, '$1\n')

    console.log(`"${wrapped}"\n`)
    console.log(`- ${author}`.green)
  } catch (error) {
    console.error('ERROR'.red.inverse, `${error.message}`)
  }
}

getQuote()
