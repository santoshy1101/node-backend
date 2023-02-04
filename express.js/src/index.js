
const express = require('express');
const app = express();
const port = 8000;
const path=require('path')
const staticPath=path.join(__dirname,'../public')

// set handle bar

app.set('view engine', 'hbs');

// template engine route
app.get('',(req,res)=>{
    res.render('index')
})


// // builtin middleware
app.use(express.static(staticPath))

app.get('/',(req,res)=>{
    res.send('hello from express server')
})


app.listen(port,()=>{
    console.log('listining to paor ${port}')
})


















// const path=require('path')
// const express = require('express');
// const app = express();


// // relative absolute
// // console.log(path.join(__dirname,'../public'))
// const staticPath=path.join(__dirname,'../public')
// // builtin middleware
// app.use(express.static(staticPath))

// // app.get(route,callback)


// app.get('/',(req,res)=>{
//     res.send('hello from response')
// });
// app.get('/about',(req,res)=>{
//     res.send('hello from the about page')
// });
// app.listen(8000,()=>{
//     console.log('listening the port at 8000')
// });