
const { Project, ProjectUser } = require('../models');

const createProject = async (data) => {
  const project = await Project.create(data);
  return project;
};

const getProjects = async () => {
  const projects = await Project.findAll();
  return projects;
};

const getProjectById = async (projectId) => {
  const project = await Project.findByPk(projectId);
  return project;
};

const updateProject = async (projectId, data) => {
  const [updated] = await Project.update(data, { where: { id: projectId } });
  if (updated) {
    const updatedProject = await Project.findByPk(projectId);
    return updatedProject;
  }
  return null;
};

const deleteProject = async (projectId) => {
  const deleted = await Project.destroy({ where: { id: projectId } });
  return deleted;
};

const searchProjects = async (query) => {
  const projects = await Project.findAll({ where: { name: { [Op.like]: `%${query}%` } } });
  return projects;
};

const filterProjects = async (filters) => {
  const projects = await Project.findAll({ where: filters });
  return projects;
};

const associateUserWithProject = async (userId, projectId) => {
  const association = await ProjectUser.create({ userId, projectId });
  return association;
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
