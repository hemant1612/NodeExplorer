// var passport = require('passport');
//
// var User = require('../models/user');
// var LocalStrategy = require('passport-local').Strategy;
//
// //tell how to store user in the function
// passport.serializeUser(function(user,done){
// done(null,user.id);
// })
//
// passprt.deserializeUser(function(id,done){
//   User.findById(id,function(err,user){
//     done(err,user);
//   })
// })
//
// passport.use('local.signup', new LocalStrategy({
//   usernameField : 'email',
//   passwordField: 'password',
//   passReqToCallback: true
// },function(req,email,password,done){
//   User.findOne({'email':email},function(err,user){
//     if(err) {
//       return done(err);
//     }
//     if(user){
//       return done(null,false ,{message: 'Email is already in use'});
//     }
//     var newChar = new User();
//     newUser.email = email;
//     newUser.password = password;
//   })
// }
// })
//
//
// passport.use('local.signup', new LocalStrategy({
//   username: 'email',
//   psswordFiled
// }))
