import { useState, useEffect } from 'react';
import AddProject from './../components/AddProject';
import ProjectCard from './../components/ProjectCard';
import { getAllProjectsService } from '../services/project.services';


function ProjectListPage() {
	const [ projects, setProjects ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	const getAllProjects = async () => {
		// Send the token through the request "Authorization" Headers
		try {
			const response = await getAllProjectsService();
			setProjects(response.data);
			setLoading(false);
		} catch (err) {
			console.log(err);
		}
	};

	// We set this effect will run only once, after the initial render
	// by setting the empty dependency array - []
	useEffect(() => {
		getAllProjects();
	}, []);

	return (
		<div className="ProjectListPage">
			<AddProject refreshProjects={getAllProjects} />

			{loading && <div>Loading...</div>}
			 { !loading && projects?.map((project) => <ProjectCard key={project._id} {...project} />  )}  
		</div>
	);
}

export default ProjectListPage;
