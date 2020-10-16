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

const imageSchema = mongoose.Schema({
    name: {type: String, required: true},
    username: {type: String, required: true},
    src: {type: String, required: true},
    width: {type: Number, require: true},
    height: {type: Number, required: true}
});

const UserModel = mongoose.model('user', userSchema)
const ImageModel = mongoose.model('image', imageSchema)
//export the model
exports.UserModel = UserModel
exports.ImageModel = ImageModel

