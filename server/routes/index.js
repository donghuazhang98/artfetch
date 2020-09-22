var express = require('express')
var router = express.Router()

var probe = require('probe-image-size')

const md5 = require('blueimp-md5')
const UserModel = require('../db/models').UserModel
//const filter = { password: 0 }

var _ = require('lodash')

router.post('/signup', function(req, res) {
  const { username, password, email } = req.body
  
  UserModel.find({ 
    $or: [
      { username },
      { email }
    ]}, 
    function(err, users) {
      if (users.length != 0) {
        if (_.find(users, {username})) {
          res.send({ code: 1, msg: 'This username already existed'});
        } else if (_.find(users, {email})) {
          res.send({ code: 1, msg: 'This email already existed'});
        }
      } else {
        new UserModel({username, password: md5(password), email}).save(function (err, user) {
          //the browser saves the cookie
          res.cookie('userid', user._id, { maxAge: 1000*60*60*24*7})    
          res.send({ code: 0, data: { _id: user._id, username, email }})
        })
      }
  })

})

router.post('/login', function(req, res) {
  const { username, password } = req.body

  UserModel.findOne({ username, password: md5(password) }, function(err, user) {
    if (!user) {
      res.send({ code: 1, msg: 'wrong username or password' })
    } else {
        res.cookie('userid', user._id, { maxAge: 1000*60*60*24*7})
        res.send({ code: 0, data: user })
      }
  })
})

router.get('/user', function(req, res){
  const userid = req.cookies.userid
  if (!userid) {
    return res.send({code: 1, msg: 'please log in first'})
  } else {
    UserModel.findOne({_id: userid}, function(err, user) {
      return res.send({code: 0, data: user})
    })
  }
})

router.post('/uploadImage', function(req, res, next){
  const { imageName, src } = req.body

  const newImage = {
    imageName: imageName,
    src: src,
  }

  probe(src).then(result => {
    const newImage = {
      imageName: imageName,
      src: src,
      width: result.width,
      height: result.height
    }
    console.log(newImage)
    const userid = req.cookies.userid

    UserModel.findByIdAndUpdate({_id: userid}, { $push: { images: newImage} }, function(err, user) {
      if (err) {
        console.log(err)
      } else {
        res.send({code: 0, data: user})
      }
    })
  })
})

module.exports = router
