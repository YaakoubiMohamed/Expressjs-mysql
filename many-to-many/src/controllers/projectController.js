
const projectService = require('../services/projectService');
const responseHandler = require('../utils/responseHandler');

const createProject = async (req, res) => {
  try {
    const { name, description } = req.body;
    const projectId = await projectService.createProject({name, description});
    responseHandler.success(res, { projectId }, 'Project created successfully');
  } catch (error) {
    responseHandler.error(res, error.message);
  }
};

const getProjects = async (req, res) => {
  try {
    const projects = await projectService.getProjects();
    responseHandler.success(res, projects, 'Projects retrieved successfully');
  } catch (error) {
    responseHandler.error(res, error.message);
  }
};

const getProjectById = async (req, res) => {
  try {
    const projectId = req.params.id;
    const project = await projectService.getProjectById(projectId);
    if (project) {
      responseHandler.success(res, project, 'Project retrieved successfully');
    } else {
      responseHandler.error(res, 'Project not found', 404);
    }
  } catch (error) {
    responseHandler.error(res, error.message);
  }
};

const updateProject = async (req, res) => {
  try {
    const projectId = req.params.id;
    const { name, description } = req.body;
    const result = await projectService.updateProject(projectId, {name, description});
    if (result) {
      responseHandler.success(res, { projectId }, 'Project updated successfully');
    } else {
      responseHandler.error(res, 'Project not found', 404);
    }
  } catch (error) {
    responseHandler.error(res, error.message);
  }
};

const deleteProject = async (req, res) => {
  try {
    const projectId = req.params.id;
    const result = await projectService.deleteProject(projectId);
    if (result) {
      responseHandler.success(res, { projectId }, 'Project deleted successfully');
    } else {
      responseHandler.error(res, 'Project not found', 404);
    }
  } catch (error) {
    responseHandler.error(res, error.message);
  }
};

const searchProjects = async (req, res) => {
  try {
    const { query } = req.query;
    const projects = await projectService.searchProjects(query);
    responseHandler.success(res, projects, 'Projects retrieved successfully');
  } catch (error) {
    responseHandler.error(res, error.message);
  }
};

const filterProjects = async (req, res) => {
  try {
    const filters = req.query;
    const projects = await projectService.filterProjects(filters);
    responseHandler.success(res, projects, 'Projects retrieved successfully');
  } catch (error) {
    responseHandler.error(res, error.message);
  }
};

const associateUserWithProject = async (req, res) => {
  try {
    const { userId, projectId } = req.body;
    const association = await projectService.associateUserWithProject(userId, projectId);
    responseHandler.success(res, association, 'User associated with project successfully');
  } catch (error) {
    responseHandler.error(res, error.message);
  }
};

module.exports = {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
  searchProjects,
  filterProjects,
  associateUserWithProject,
};
