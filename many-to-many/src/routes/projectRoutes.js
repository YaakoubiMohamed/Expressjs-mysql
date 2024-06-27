const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

router.post('/projects', projectController.createProject);
router.get('/projects', projectController.getProjects);
router.get('/projects/:id', projectController.getProjectById);
router.put('/projects/:id', projectController.updateProject);
router.delete('/projects/:id', projectController.deleteProject);
router.get('/projects/search', projectController.searchProjects);
router.get('/projects/filter', projectController.filterProjects);
router.post('/projects/associate', projectController.associateUserWithProject); 

module.exports = router;