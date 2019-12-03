const cheerio = require('cheerio')

function metaMarkup({ name, description, image, url }) {
  return `
    <meta property="og:type" content="website">
    <meta property="og:title" content="${name}">
    <meta property="og:description" content="${description}">
    <meta property="og:url" content="${url}">
    <meta property="og:image" content="${image}">
    <meta itemprop="name" content="${name}">
    <meta itemprop="description" content="${description}">
    <meta itemprop="url" content="${url}">
    <meta itemprop="image" content="${image}">
  `
}

function meta({ route, html }) {
  // meta tags (fill in your info here / dynamic per route)
  const metaTags = {
    name: 'nwHacks 2020',
    description: 'Western Canada\'s Largest Hackathon',
    image: 'https://www.nwhacks.io/thumbnail.png',
    url: 'https://www.nwhacks.io'
  }

  // Load Nuxt generared HTML
  const $ = cheerio.load(html)

  // Generate meta markup
  const tags = metaMarkup(metaTags)

  // Append them to <head>
  $('head').append(tags)

  // Return new HTML
  return $.html()
}

exports.meta = meta
