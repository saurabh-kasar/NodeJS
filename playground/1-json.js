const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)
console.log(data)

data.name = 'Saurabh'
data.age = '24'

const obj = JSON.stringify(data)
const objbuf = fs.writeFileSync('1-json.json', obj)
console.log(objbuf)

















// const book = {
//     title:'Ego is the enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book, null, "\t")
// fs.writeFileSync('1-json.json', bookJSON)