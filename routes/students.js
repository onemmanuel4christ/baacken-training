var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');
const studentModel = require('../models/Students.model');

/* GET students listing. */
router.get('/', function(req, res, next) {
  res.send('students routes is working');
});

router.post('/add', function(req, res, next) {
    let newStudent = new studentModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        dob: req.body.dob,
        department: req.body.department
    });
    newStudent.save(function(err, newStudent){
        if(err){
            res.send(err)
         }
         else
            res.send({status: 200, message:'students added successfully', resultFound:response.length, studentObj: newStudent});
    });
  });

  router.get('/list', function(req, res, next) {
    
    studentModel.find(function(err, response){
        if(err){
            res.send(err)
         }
         else
            res.send({status: 200, resultFound:response.length, students: response});
    });
  });

  router.get('/searchByFirstName', function(req, res, next) {
    const firstNameQuery = req.query.firstName;
    studentModel.find({firstName: firstNameQuery}, function( err, response){
        if(err){
            res.send(err)
         }
         else
            res.send({status: 200, resultFound:response.length,  students: response});
    });
  });
  
  router.get('/searchById', function(req, res, next) {
    const idQuery = req.query.id;
    studentModel.findById(idQuery, function( err, response){
        if(err){
            res.send(err)
         }
         else
            res.send({status: 200,  students: response});
    });
  });
module.exports = router;
 