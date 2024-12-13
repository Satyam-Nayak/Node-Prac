const fs = require('fs')
// console.log(fs)


// write a file
// let writefile= fs.writeFile('./write.txt','hello file is written',(err)=>{
//     if (err) throw err;
//     console.log('file is written')
// })


// Read file using call back function
// fs.readFile('./write.txt','utf-8',(err,data)=>{
//     if (err) throw err;
//     console.log(data)
// })

// append file
// let readfile= fs.readFile('./write.txt','utf-8', (err,data)=>{
//     if (err) throw err;
//     let appen = fs.appendFile('./write1.txt',data, (err)=>{
//         if (err) throw err;
//         console.log('file is appended')
//     })
//     console.log(data)
// })

// delete a file 
// let del = fs.unlink('/delete.js',err=>{
//     if (err) throw err;
//     console.log('file is deleted')
// })


// delete a folder
// let del = fs.rmdir('dele',err=>{
//     if (err) throw err;
//     console.log('folder is deleted')
// })


// rename a file 

let rename= fs.rename('foll', 'satyam', err =>{
    if (err) throw err;
    console.log("folder name is rnamed")
})




