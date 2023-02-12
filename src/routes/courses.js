const express = require("express")
const router = express.Router();

const courseController = require("../app/controllers/CourseController");

router.get('/create', courseController.create)
router.post('/store', courseController.store)
router.get('/:id/edit', courseController.edit)
router.post('/form-actions',courseController.formActions)
router.post('/form-trash-actions',courseController.formTrashActions)
router.put('/:id', courseController.update)
router.patch('/:id/restore', courseController.restore)
router.delete('/:id', courseController.del)
router.delete('/:id/force', courseController.delforce)
router.get('/:slug', courseController.show)

module.exports = router;