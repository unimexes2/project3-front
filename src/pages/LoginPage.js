import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './../context/auth.context';
import { loginService } from '../services/auth.services';

function LoginPage(props) {
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ errorMessage, setErrorMessage ] = useState(undefined);
	const navigate = useNavigate();
	const { logInUser } = useContext(AuthContext);

	const handleEmail = (e) => setEmail(e.target.value);
	const handlePassword = (e) => setPassword(e.target.value);

	const handleLoginSubmit = async (e) => {
		e.preventDefault();
		const requestBody = { email, password };

		try {
			const response = await loginService(requestBody);
			
			const token = response.data.authToken;
			logInUser(token);
			navigate('/');
		} catch (err) {
			const errorDescription = err?.response?.data?.message;
			setErrorMessage(errorDescription);
		}
	};

	return (
		
		
		
		
		
		<div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <h2 className="text-center text-dark mt-5">Administator login</h2>
        
        <div className="card my-5">

          <form className="card-body cardbody-color p-lg-5" onSubmit={handleLoginSubmit}>

            <div className="text-center">
              <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                width="200px" alt="profile"/>
            </div>

            <div className="mb-3">
              <input type="text" className="form-control" id="Username" aria-describedby="emailHelp" value={email} onChange={handleEmail}
                placeholder="User Name"/>
            </div>
            <div className="mb-3">
              <input type="password" className="form-control" id="password" placeholder="password"type="password" value={password} onChange={handlePassword} />
            </div>
            <div className="text-center"><button type="submit" className="btn btn-color px-5 mb-5 w-100">Login</button></div>
            
          </form>
        </div>

      </div>
    </div>


		
		
		

		
			{errorMessage && <p classNameName="error-message">{errorMessage}</p>}

		
		</div>
	);
}

export default LoginPage;
