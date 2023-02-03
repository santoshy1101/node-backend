

// folllow the flow

const http = require("http")

const server = http.createServer((req,res)=>{
    // res.end("this is santosh side")
    // res.url("/contact")
    switch(req.url){
        case "/":{
            res.end("home page")
            // console.log("conatct page")
            break;
        }
        case "/about":{
            
            res.end("<h1>About page</h1>"  )
            break;
        }
        case "/contact":{
            res.end("conatct page")
            break;
        }
        default :{
            res.writeHead(404,{"Content-Type":"text/html"})
            res.end("404 page error ")
            break;
        }
    }

 
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("seccusefull run server port 8000")
})