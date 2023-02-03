
const input = process.argv;

// const fs=require("fs") ;
// fs.writeFile("url/index.js","kuch nhi",((err)=>{
//     console.log("file created");
// }))
const {  getIp, writeToFile, readFile, deleteFile, makeCowSay } = require("./helper_functions.js")

// console.log("input",getIp(input[2]))

if(input[2] ==="gip"){
    getIp(input[3])
}else if(input[2]==="wf"){
    writeToFile(input[3],input[4])
}else if(input[2]==="rf"){
    readFile(input[3])
}else if(input[2]==="df"){
    deleteFile(input[3])
}else if(input[2]==="mcw"){
    makeCowSay(input[3])
}



