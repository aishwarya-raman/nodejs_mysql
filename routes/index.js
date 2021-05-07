var express = require('express');
var router = express.Router();
const Student = require("../models/student.model.js");

var db = require('../config/db.config');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'School Database' });
});
router.get('/profile', function(req,res,next){
  res.render('profile');
});
router.get('/signup',function(req,res,next){
  res.render('signup');
});
router.get('/login',function(req,res,next){
  res.render('login');
});
router.post("/signup", function (req, res) {
  const userDetails=req.body;
  res.send(userDetails);
});
  //var sql = 'INSERT INTO students(?,?,?,?) SET (fname,lname,email,password)';
  //res.send(userDetails);
  //db.query(sql, userDetails,function (err, data) { 
  //if (err) throw err;
    //   console.log("User dat is inserted successfully "); 
  //});
 //res.redirect('/');  // redirect to user form page after inserting the data

//}); 

module.exports = router;
