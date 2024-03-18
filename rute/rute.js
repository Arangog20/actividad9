const express = require('express');
const router = express.Router();
const userController = require('../controllers/studentsController');




router.get('/api/estudiantes', userController.getAllUsers); // FUNCIONA

router.get('/api/estudiantes/nombre/:nombre', userController.getUsersByName); 

router.post('/api/estudiantes/create', userController.createUser); // FUNCIONA

router.get('/api/estudiantes/id/:id', userController.getUsersById); // FUNCIONA

router.get('/api/estudiantes/nota/:nota',userController.getStudentsByNote);

router.get('/api/estudiantes/nota', userController.getAllnotes);



module.exports = router;