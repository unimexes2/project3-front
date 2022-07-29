import './App.css';
import { Route, Routes } from 'react-router-dom';
import MyNavbar from './components/Navbar';

import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import AddAnimal from './pages/AddAnimal';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import Main from './pages/main';
import Map from './pages/map';
import Stories from './pages/stories';
import AdMap from './pages/addmap';
import AdStories from './pages/addstory';
import CatsList from './pages/cats';
import CatDetails from './pages/CatDetails';
import EditCatPage from './pages/EditCatPage'
import DogsList from './pages/dogs';
import DogDetails from './pages/DogDetails';
import EditDogPage from './pages/EditDogPage'
import DogsAdopted from './pages/adoptedDog';
import Donation from './pages/Donation';
import AdDonation from './pages/AddDonation';

import AddContact from './pages/Addcontact';
import ContactList from './pages/ContactList';

import ContactDetails from './pages/ContactDetails';
import EditContactPage from './pages/EditContactPage';


import AdSettings from './pages/Settings';
import CatsAdopted from './pages/Catsadopted';
import Users from './pages/users';

function App() {
	
	return (
		<div>
			<MyNavbar />

			<div className="App">

				<Routes>
					<Route exact path="/add" element={<PrivateRoute><AddAnimal /></PrivateRoute>} />

					<Route exact path="/" element={<Main />} />
					<Route exact path="/addmap" element={<PrivateRoute><AdMap /></PrivateRoute>} />
					<Route exact path="/stories" element={<Stories />} />
					<Route exact path="/addstories" element={<PrivateRoute><AdStories /></PrivateRoute>} />
					<Route exact path="/settings" element={<PrivateRoute><AdSettings /></PrivateRoute>} />
					<Route	exact path="/map" element={	<Map />	}/>
					<Route	exact path="/addonation" element={<PrivateRoute>	<AdDonation /></PrivateRoute>	}/>
					<Route	exact path="/donate" element={	<Donation />	}/>
					<Route	exact path="/cats" element={ <CatsList /> }	/>
    				<Route	exact path="/cat/:catId" element={<CatDetails />}/>
    				<Route	exact path="/cats/edit/:catId" element={<PrivateRoute> <EditCatPage /> </PrivateRoute>}/>

					<Route	exact path="/dogs" element={<DogsList />} />
					<Route	exact path="/addcontact" element={ <AddContact /> }	/>
					<Route	exact path="/contacts" element={ <ContactList /> }	/>
					<Route	exact path="/contacts/:contactId" element={ <ContactDetails /> }	/>
		            <Route path="/contacts/edit/:contactId" element={<PrivateRoute> <EditContactPage /> </PrivateRoute>} />

					
                    <Route exact path="/dog/:dogId" element={<DogDetails /> } />
		            <Route path="/dogs/edit/:dogId" element={<PrivateRoute> <EditDogPage /> </PrivateRoute>} />
					<Route path="/users" element={<PrivateRoute> <Users/> </PrivateRoute>} />
					<Route	exact path="/dogadopted" element={<DogsAdopted />}/>
					<Route	exact path="/catadopted" element={<CatsAdopted />}/>
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