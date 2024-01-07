const zod = require("zod")

const todoschema = zod.object({
    title : zod.string(),
    description : zod.string()
})  

const completedschema = zod.object({
    id : zod.string()
})

module.exports = {
    todoschema : todoschema,
    completedschema : completedschema
}