var mongoose = require('mongoose');
var express = require('express')
var router = express.Router()

var probe = require('probe-image-size')

const md5 = require('blueimp-md5')
const UserModel = require('../db/models').UserModel
const ImageModel = require('../db/models').ImageModel
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

router.get('/user/:username', function(req, res){
  const username = req.params.username

  UserModel.findOne({username: username}, function(err, user) {
    if (!user) {
      res.send({ code: 1, msg: 'no such user' })
    } else {
      res.send({ code: 0, data: user })
    }
  })
})

router.get('/user/:username/image/:image_id', function(req, res) {
  const username = req.params.username
  const image_id = req.params.image_id

  UserModel.findOne({
    username: username,
  },
  {
    images: {
      // project the user with only the specific image
      $elemMatch: {
        _id: mongoose.Types.ObjectId(image_id)
      },
    },
    email: 1,
  }
  , function(err, user) {
    if (!user) {
      res.send({ code: 1, msg: 'no such user' })
    } else {
      res.send({ code: 0, data: user })
    }
  })
})

router.post('/uploadImage', function(req, res, next){
  const { imageName, username, src } = req.body
  const userid = req.cookies.userid

  probe(src).then(result => {
    const newImage = {
      name: imageName,
      username: username,
      src: src,
      width: result.width,
      height: result.height
    }
    // first save a new image document
    ImageModel.find({src}, function(err, images) {
      if (images.length != 0) {
        res.send({ code: 1, msg: 'This image already existed'})
      } else {
        new ImageModel(newImage).save(function(err, image) {
          if (err) {
            console.log(err)
          } else {
            // update the user image storge
            UserModel.findByIdAndUpdate({_id: userid}, 
              { $push: { 
                images: { 
                  _id: image._id, 
                  username: username,
                  name: newImage.name,
                  src: newImage.src,
                  width: newImage.width,
                  height: newImage.height
                }
              } }, function(err, user) {
              if (err) {
                console.log(err)
              } else {
                res.send({code: 0, data: user})
              }
            })
          }
        })
      }
    })  
  })
})

// get the top 6 images for fitting main gallery
router.get('/main/gallery', function(req, res) {
  ImageModel.find({}, function(err, images) {
    if (!images) {
      res.send({ code: 1, msg: 'no enough images'})
    } else {
      res.send({ code: 0, data: images})
    }
  }).sort({ field: 'asc', _id: -1 }).limit(6)
})

module.exports = router
