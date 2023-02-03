const fs=require("fs");
var dns = require('dns');
const cowS = require("cowsay")


const getIp=(web)=>{
    var w3 = dns.lookup(`www.${web}.com`, function (err, addresses, family) {
      console.log(web,addresses);
    });
    
}
const writeToFile=(fname,fcontent)=>{
    fs.writeFile(fname,fcontent,((err)=>{
        console.log("file created")
    }))
    }
    
    const readFile=(fileName)=>{
    fs.readFile(fileName,"utf8",((err,data)=>{
        console.log("file data",data)
    }))
    }
    
    const deleteFile =(fileName)=>{
        fs.unlink(fileName,((err)=>{
            console.log("file deleted")
        }))
    }
    const makeCowSay=(content)=>{
        console.log(cowS.say({
            text:content
        }))
    }
    
module.exports= {  getIp, writeToFile, readFile, deleteFile, makeCowSay }