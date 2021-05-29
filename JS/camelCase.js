const process = require('process')

const kebabToCapital = (kebabCase, delim) =>
  kebabCase.split(delim || '_').reduce((acc, word) => {
    const [first, ...last] = word.split('')
    return `${acc}${first.toUpperCase()}${last.join('')}`
  }, '')

const kebabToCamel = (kebabCase, delim) =>
  kebabCase.split(delim || '_').reduce((acc, word, i) => {
    if (!i) return word
    const [first, ...last] = word.split('')
    return `${acc}${first.toUpperCase()}${last.join('')}`
  }, '')

const capitalToKebab = capitalCase =>
  capitalCase.split(/([a-z])(?=[A-Z])/).reduce((acc, word, i) => {
    return !i
      ? word.toLowerCase()
      : i % 2
      ? `${acc}${word}`
      : `${acc}_${word.toLowerCase()}`
  }, '')

const camelToKebab = camelCase =>
  camelCase.split(/([a-z])(?=[A-Z])/).reduce((acc, word, i) => {
    return !i ? word : i % 2 ? `${acc}${word}` : `${acc}_${word.toLowerCase()}`
  }, '')

switch (process.argv[2]) {
  case 'kebabToCapital':
    console.log(kebabToCapital(process.argv[3]))
    break
  case 'kebabToCamel':
    console.log(kebabToCamel(process.argv[3]))
    break
  case 'capitalToKebab':
    console.log(capitalToKebab(process.argv[3]))
    break
  case 'camelToKebab':
    console.log(camelToKebab(process.argv[3]))
    break
}
