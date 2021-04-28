import { default as React, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Assets from '../../assets';

import './login.scss';

const Login = () => {
	const history = useHistory();

	return (
		<div className="login">

			<img className="login__tree" src={Assets.TreeStart}></img>
		
			<h1>Login om mee op pad te gaan met Snuitertje!</h1>
			<form className="login__form">
				<label>GEBRUIKERSNAAM</label>
				<input type="text" id="name"></input>
				
				<label>WACHTWOORD</label>
				<input type="password" id="name" ></input>

				<img className="login__form-button" src={Assets.Button}></img>

			</form>
		


		</div>
	)
}

export default Login;
