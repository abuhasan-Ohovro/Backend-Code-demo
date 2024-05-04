import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true
    },
    complete : {
        type : Boolean,
        default : false
    },
    createdBy :{
        type : mongoose.Schema.Types.ObjectId,   /* This syntax say that you want give a reference to the other model */
        ref : "User" // Reference of the Schema. here we give the refernce of the User. Make sure you use the same variable that you in the usemodel Schema at the time of export.
    },
    subTodos : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "SubTodo"
        }
    ]  // Array of Subtodos


















}, { timestamps: true });

export const Todo = mongoose.model("Todo", todoSchema);
