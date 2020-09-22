//connect to mongodb
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/artfetch_users', { useUnifiedTopology: true, useNewUrlParser: true });

//gain the connection object
const conn = mongoose.connection
conn.on('connected', function() {
    console.log('connected sucessfully')
});

//determine schema of the model
const userSchema = mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true},
    header: {type: String},
    post: {type: String},
    info: {type: String},
    images: {type: [Object]}
});

const UserModel = mongoose.model('user', userSchema)
//export the model
exports.UserModel = UserModel

