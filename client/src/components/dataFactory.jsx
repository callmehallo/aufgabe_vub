const dataFactory = node => {
  const dateYearCat = node
    .querySelector('.tag-line--default')
    .textContent.replace(/(\r\n|\n|\r)/gm, '')
    .trim()
  const dateYearCatArr = dateYearCat.split('|')

  const date = dateYearCatArr[0]

  const year = dateYearCatArr[0].slice(-5)

  const category = dateYearCatArr[1]

  const url = new URL(
    node.querySelector('a').getAttribute('href'),
    'https://www.springerprofessional.de/'
  )
  const link = url.toString()

  const title = node
    .querySelector('a')
    .textContent.replace(/(\r\n|\n|\r)/gm, '')
    .trim()

  const authors = node.querySelector('div')
    ? node.querySelector('div').textContent.trim()
    : ''

  const edition = node.parentNode.parentNode
    .querySelector('.issue-title')
    .textContent.slice(-6, -5)

  return {
    edition,
    date,
    year,
    category,
    title,
    authors,
    link,
  }
}

export default dataFactory
