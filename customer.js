// Importing the 'mongoose' library, which is an ODM (Object Data Modeling) library for MongoDB.
const mongoose = require('mongoose');

// Creating a schema using the 'Schema' class from mongoose.
const Schema = mongoose.Schema;

// Defining a schema for the 'customers' collection in MongoDB.
const customersSchema = new Schema({
    // Field for storing the user's name as a string.
    user_name: {
        type: String,   // Data type is String.
        required: true  // The field is required and must have a value.
    },
    // Field for storing the user's password as a string.
    password: {
        type: String,   // Data type is String.
        required: true  // The field is required and must have a value.
    },
    // Field for storing the user's email address as a string.
    email: {
        type: String,   // Data type is String.
        required: true  // The field is required and must have a value.
    },
    // Field for storing the user's age as a number.
    age: {
        type: Number,   // Data type is Number.
        required: true  // The field is required and must have a value.
    }
});

// Creating a model from the schema. This model will represent the 'customers' collection in MongoDB.
// The first argument is the name of the collection, and the second argument is the schema.
const CustomersModel = mongoose.model('customers', customersSchema);

// Exporting the CustomersModel to be used in other parts of the application.
module.exports = CustomersModel;