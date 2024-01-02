import mongoose from 'mongoose' //step1

//mongoose help us to make schema.

const userSchema = new mongoose.Schema(        //step2 is used to design the schema 
    {
       username:{
        type: String,
        required : true,
        unique: true,
        lowercase : true
       },
       email:{
        type: String,
        required : true,
        unique: true,
        lowercase : true
       },
       password:{
        type: String,
        required: [true,"password is reqired"]
       }
    } , {timestamps: true}
);

//step3 User is a model on the basis of userSchema, 
export const user = mongoose.model("User", userSchema) 