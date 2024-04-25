//IN this backend tutorial we will learn about some of the basics of the mongoose and how to make data models for the backend. So what is Mongoose? =>
/* 
Mongoose is an elegant Node.js framework that simplifies interaction with MongoDB databases. MongoDB is a popular NoSQL database, and Mongoose provides a straightforward schema-based solution to model your application data. It offers features like validation, casting, and querying, making it easier to work with MongoDB in Node.js applications.

With Mongoose, you define your data models using schemas, which specify the structure of your documents. These schemas can include data types, validation rules, and other constraints. Mongoose also provides an object data modeling (ODM) layer, allowing you to work with MongoDB documents in an object-oriented way.

Overall, Mongoose streamlines the development process for Node.js developers by providing a structured approach to working with MongoDB databases, handling tasks like connection management, schema definition, data manipulation, and querying.

After all this discussion one keyword looking unfimiliar to you that is Schema. In the context of databases, a schema defines the structure of the data stored in the database. It specifies the organization of the data elements, including their data types, relationships, constraints, and other properties. Essentially, a schema acts as a blueprint for how data should be organized and represented within the database.

*/

// Declaring simple data model using mongoose

import mongoose from "mongoose"  /** First step you have to import Schema from mongoose*/

const userSchema = new mongoose.Schema(
    {
        username : {
            type : String,
            required : true,
            unique : true,
            lowercase : true
        },

        email : {
            type : String,
            required : true,
            unique : true,
            lowercase : true,
        },
        password : {
            type : String,
            required : [true,"Must be atleast 8 character"]
        }
    },{timestamps : true}
)  /* Second step define a sample Schema */

export const User = mongoose.model("User",userSchema) /*Export the Schema using this format and syntax */
