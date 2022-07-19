import { useState, useEffect } from 'react';
import { getProjectDetailsService } from '../services/project.services';

import { Link, useParams } from 'react-router-dom';
import AddTask from '../components/AddTask';
import TaskCard from '../components/TaskCard';

function ProjectDetailsPage(props) {
	const [ project, setProject ] = useState(null);
	const { id } = useParams();
	const projectId = id;

	const getProject = async () => {
		localStorage.getItem('authToken');
		try {
			const response = await getProjectDetailsService(id);
			setProject(response.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getProject();
		// eslint-disable-next-line
	}, []);

	return (
		<div className="ProjectDetails">
			{project && (
				<div>
					<h1>Project: {project.title}</h1>
					<p>Description: {project.description}</p>
				</div>
			)}

			<AddTask refreshProject={getProject} projectId={projectId} />

			{project &&
				project.tasks.map((task) => {
					return <TaskCard key={task._id} {...task} />;
				})}

			<Link to="/projects">
				<button>Back to projects</button>
			</Link>
		</div>
	);
}

export default ProjectDetailsPage;
