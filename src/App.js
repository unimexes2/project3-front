import './App.css';
import { Route, Routes } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectListPage from './pages/ProjectListPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import CatsList from './pages/cats';
// import CatCard from './pages/catCard';
import DogsList from './pages/dogs';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import AddAnimal from './pages/AddAnimal';
import PrivateRoute from './components/PrivateRoute'; 
import AnonRoute from './components/AnonRoute'; 
import Main from './pages/main';
import Map from './pages/map';
function App() {
	return (
		<div>
			<MyNavbar />
		
			<div className="App">
		
			<Routes>
				<Route exact path="/add" element={<AddAnimal />} />

				<Route exact path="/" element={<Main/>} />
				<Route
					exact
					path="/projects"
					element={
						<PrivateRoute>
							<ProjectListPage />
						</PrivateRoute>
					}
				/>

				<Route
					exact
					path="/cats"
					element={
				
							<CatsList />
						
					}
				/>
<<<<<<< Updated upstream

								<Route
=======
				{/* <Route
					exact
					path="/cat/:catId"
					element={
							<CatCard />
					}
				/> */}
				<Route
>>>>>>> Stashed changes
					exact
					path="/dogs"
					element={
				
							<DogsList />

					<Route
					exact
					path="/map"
					element={
				
							<Map/>

						
					}
				/>
				<Route
					exact
					path="/signup"
					element={
						<AnonRoute>
							<SignupPage />
						</AnonRoute>
					}
				/>
				<Route
					exact
					path="/login"
					element={
						<AnonRoute>
							<LoginPage />
						</AnonRoute>
					}
				/>
			</Routes>
		</div>
		</div>
	);
}

export default App;
