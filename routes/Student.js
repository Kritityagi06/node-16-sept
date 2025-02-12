const express = require('express');
const StudentController = require('../controller/studentcontroller')
const router = express.Router();

router.post('/add/user',(req,res)=> {
    StudentController.addStudent(req,res)
})
router.get('/user',(req,res)=>  {
    StudentController.getStudents(req,res)
})
module.exports =  router