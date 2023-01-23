const express=require('express')
//initializing express app
const app=express()

//add view template capability
app.set('view engine','ejs')
//add ability to add static assets like pictures and styling sheets
app.use(express.static('public'))

//route to index
app.get('/',(req,res)=>{
    res.render('index')
})

//listening @ PORT for changes
const PORT=process.env.PORT||5004
app.listen(PORT,()=>{
    console.log(`Server started on http://localhost:${PORT}`)
})