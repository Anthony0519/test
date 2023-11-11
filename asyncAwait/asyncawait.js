 //working with async/await
 //using function declaration
// const fs = require("fs")

//  async function myFile() {
//     try{
//         await fs.readFile("./testFile.txt", "utf8", (error,data)=>{
//             if (error) {
//                 console.log('this file does not exist')
//             }else{
//                 console.log(data)
//             }
//         })
//     }catch(e){
//         console.log(e.message)
//     }
//  }
//  myFile();

//  using arrow function
// const fs = require("fs")

//  const myFile = async() => {
//     try{
//         await fs.readFile("./testFile.txt", "utf8", (error,data)=>{
//             if (error) {
//                 console.log('this file does not exist')
//             }else{
//                 console.log(data)
//             }
//         })
//     }catch(e){
//         console.log(e.message)
//     }
//  }
//  myFile();

// using promise to reead a file
// const fs = require('fs')
// const anthony = new Promise((resolve,reject)=>{
//     const myFile = fs.readFile('./testfiles.txt', 'utf8', (error,data)=>{
//         if (error) {
//             console.log('error reading this file')
//         } else {
//             console.log(data)
//         }
//     })
//     resolve(myFile)
// })

// function callbackerror(error) {
//     console.log('error reading this file')
// }

// anthony.then((result) => anthony(result)).catch(callbackerror)

// const fs = require('fs')
// const anthony = new Promise((resolve)=>{
//     const readFile = fs.readFile('./testfiles.txt', 'utf-8', (error,data)=>{
//         if (error){
//             console.error({error})
//         }
//         else{
//             console.log(data)
//         }
//     })
//     resolve(readFile)
// }) 
// .then((result)=>anthony(result)).catch((error)=>{
//     console.log('you have an error' + {error})
// })



// const fs = require('fs').promises
// async function readWrite (source, destination){
//     try {
//        const datas = await fs.readFile(source, "utf8", (error)=>{
//             if (error) {
//                 console.log("error");
//             } else {
//                 console.log("succesful");
//             }
//         })
//         await fs.writeFile( destination, datas, (error)=>{
//             if (error) {
//                 console.log(error);
//             } else {
//                 console.log('success');
//             }
//         })
//     } catch (e) {
//         console.log(e.message)
//     }
// }

// readWrite("./testFile.txt","./outputtext.txt")



// const fs = require('fs').promises
// async function readWrite (source, destination){
//     try {
//       const read = await fs.readFile(source, 'utf8')
//       await fs.writeFile(destination, read)
//       console.log('succesful');
//     } catch (e) {
//         console.log(e.message)
//     }
// }

// readWrite("./testFile.txt","./output.txt")
