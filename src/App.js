import './App.css';
import { Route, Routes } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import DogDetails from './pages/DogDetails';
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
import CatCard from './pages/catCard';
import Stories from './pages/stories';
import AdMap from './pages/addmap';
import AdStories from './pages/addstory';
import EditDogPage from './pages/EditDogPage'
import DogsAdopted from './pages/adoptedDog';

function App() {
	return (
		<div>
			<MyNavbar />

			<div className="App">

				<Routes>
					<Route exact path="/add" element={<AddAnimal />} />

					<Route exact path="/" element={<Main />} />
					<Route exact path="/addmap" element={<AdMap />} />
					<Route	exact path="/cats" element={<CatsList /> }	/>
    				<Route	exact path="/cat/:catId" element={<CatCard />	}/>
					<Route	exact path="/dogs" element={<DogsList />} />
					<Route exact path="/addstories" element={<AdStories />} />
					<Route exact path="/stories" element={<Stories />} />
					<Route	exact path="/map" element={<Map />}/>
                    <Route exact path="/dog/:dogId" element={<DogDetails />} />
		            <Route path="/dogs/edit/:dogId" element={ <EditDogPage /> } />
					<Route	exact path="/dogadopted" element={<DogsAdopted />}/>
					<Route exact path="/signup"	element={ <AnonRoute>
						<SignupPage />
						</AnonRoute>
						}/>
					<Route exact path="/login"	element={ <AnonRoute>
						<LoginPage />
						</AnonRoute>
						}/>
				</Routes>
			</div>
		</div>
	);

}

export default App;
