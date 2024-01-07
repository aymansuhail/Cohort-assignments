const express = require('express')
const { todo } = require('./db')
const app = express()
const{todoschema,completedschema} = require ("./types")
const cors = require("cors")
app.use(express.json())
app.use(cors())

app.post("/todo",async function(req,res){
const createpayload = req.body;
const parsedpayload = todoschema.safeParse(createpayload);
if(!parsedpayload.success){
    res.status(411).json({
        msg : "wrong inputs"
    })
    return;
}
//else return to the mongoDB
await todo.create({
    title : createpayload.title,
    description : createpayload.description,
    completed : false
})
res.json({
    msg : "todo created"
})

})

app.get("/todos",async function(req,res){
   const todos = await todo.find({})
   console.log(todos)
   res.json({
    todos : todos
   })

})

app.put("/completed",async function(req,res){
const id = req.body;
const parsedid = completedschema.safeParse(id)
if(!parsedid.success){
    res.status(411).json({
        msg : "wrong inputs"
    })
}
await todo.updateOne({
    _id : req.body.id
},{
    completed : true
})
res.json({
    msg : "completed"
})

})

app.listen(4000)