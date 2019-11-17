var express = require('express')
var router = express.Router()

const md5 = require('blueimp-md5')
const UserModel = require('../db/models').UserModel
//const filter = { password: 0 }

router.post('/signup', function(req, res) {
  const { username, password, email } = req.body
  
  UserModel.findOne({ username }, function(err, user) {
    if (user) {
      res.send({ code: 1, msg: 'Username already existed'});
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

module.exports = router