import service from './service';

const URL = '/projects';

const getAllProjectsService = () => {
	return service.get(`${URL}/`);
};
const getProjectDetailsService = (id) => {
	return service.get(`${URL}/${id}`);
};

const addNewProjectService = (newProject) => {
	return service.post(`${URL}/`, newProject);
};

export { getAllProjectsService, addNewProjectService, getProjectDetailsService };
