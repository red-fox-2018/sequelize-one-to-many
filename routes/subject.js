/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/


const router = require('express').Router();
const SubjectController = require('../controllers/subject');

router.get('/', SubjectController.index);
router.get('/:id/view', SubjectController.viewTeachers);
router.get('/add', SubjectController.add);
router.post('/', SubjectController.create);
router.get('/:id/edit', SubjectController.edit);
router.post('/:id/edit', SubjectController.update);
router.get('/:id/delete', SubjectController.delete);
router.post('/:id/delete', SubjectController.destroy);


module.exports = router;
