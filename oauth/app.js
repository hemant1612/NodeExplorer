const express = require('express');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const keys = require('./config/keys');
const passport = require('passport');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');

const app = express();

app.set('view engine','ejs');
app.use(cookieSession({
  maxAge:24*60*60*1000,
  keys:[keys.session.cookieKey]
}));

//initialize passport
app.use(passport.initialize());
app.use(passport.session());

//connect to md
mongoose.connect('mongodb://localhost/', { useMongoClient: true } , ()=>{
  console.log('connected to mongoose');
});

//set up routes

app.use('/profile',profileRoutes);
app.use('/auth',authRoutes);


app.get('/',(req,res)=>{
 res.render('home',{user : req.user})
});

app.listen(3000 , () => {
  console.log('app now listening on 3000');
});
