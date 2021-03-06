const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');
const { route } = require('./news');
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.destroy);
router.delete('/:id/force', courseController.forcedestroy);
router.get('/:id/edit', courseController.edit);
router.get('/:slug', courseController.show);

module.exports = router;