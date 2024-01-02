import mongoose from 'mongoose' 
const todoSchema = new mongoose.Schema(
    {
      content:{
       type: String,
       required: true
      },
      complete:{
        type: Boolean,
        default: false
      },
      cretedBy:{
        type: mongoose.Schema.Types.ObjectId, // it is used to connect with user.models schema 
        ref:"User"
      },
      subTodos:
      [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodo"
        }
      ] // Array of Sub-Todos
    }, {timestamps: true}
)
export const todo= mongoose.model("Todo" , todoSchema)