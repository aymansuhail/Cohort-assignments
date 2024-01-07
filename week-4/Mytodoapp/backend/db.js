const mongoose = require('mongoose')
const Schema = mongoose.Schema;
mongoose.connect("mongodb+srv://Ayman:COB5EA68oQZrADaQ@cluster0.d4kq4is.mongodb.net/todoapplication")

const DBtodochema = new Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('todos', DBtodochema);

module.exports = ({
    todo 
})