const fs = require('fs')
// console.log(fs)

// const writeData = fs.createWriteStream('write.txt')
// writeData.write('hello boy')
// console.log("data is written")

// const readData = fs.createReadStream('./write.txt','utf-8')
// readData.on('data',data=>{
//     console.log(data)
// })

// readData.on('end',_=>{
//     console.log('event is ended')
// })

// readData.on('error',err=>{
//     console.log(err)
// })

// readData.on('close',_=>{
//     console.log('event is closed')
// })


const readData= fs.createReadStream('./write.txt','utf-8')
const writeData = fs.createWriteStream('balo.txt')
readData.pipe(writeData)

