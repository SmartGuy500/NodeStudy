const fs = require('node:fs')

// console.log("Initiating file reading...")

// const results = fs.readFileSync('./names.txt', 'utf8')

// fs.writeFileSync('./results.txt', `Final result of synchronous reading:
// ${results} `, 
// (error)=> {
//     if (error){
//         console.log(`Error detected: ${error}`)
//     }
// })

// // console.log('File reading completed ')


console.log('Initiating file reading... ')

fs.readFile('./names.txt', 'utf8', (error,data)=>{
    if (error){
        console.log(`Error detected: ${error}`)
    } else {
        console.log(data)
    }

    fs.writeFile(
        './results.txt', 
        `Read file names.txt and results were: ${data}`, 
        (error)=> {
            if (error){
                console.log(`Error detected: ${error}`)
            } else{
                console.log('File written successuflly')
            }
        }
    )
} 
)
console.log('File reading completed')