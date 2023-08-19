const express = require('express');
const middleware = require('./api.middleware')
const controller = require('./api.controllers')

const router = express.Router();

//students
router.get('/', controller.GetStudents)

router.post('/', middleware.CheckProgram, controller.CreateStudents)

router.get('/:id', controller.getOneStudent)

router.patch("/:id", controller.updateStudent)
    
router.delete("/:id", controller.deleteStudent )


module.exports = router