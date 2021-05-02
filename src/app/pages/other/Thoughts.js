import { default as React, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as Assets from '../../assets';
import { Header  } from '../../components';

import './thoughts.scss';

const Thoughts = () => {
	const history = useHistory();
	const [thoughts, setThoughts] = useState(localStorage.getItem('myData') ?  localStorage.getItem('myData').split(',') : []);

console.log(localStorage.getItem('myData').split(','));

	const submit = () => {
		const thought = document.getElementById('thought').value;
		setThoughts([...thoughts, thought]);
		console.log(thoughts);
	}

	useEffect(() => {
		if (thoughts.length === 0) {
			return ''
		} else {
			localStorage.setItem('myData', thoughts);
			document.getElementsByClassName('thoughts__main')[0].innerHTML = ""
			thoughts.forEach(element => {
				const node = document.createElement("p");
				node.className = 'thoughts__main-element';
				const textnode = document.createTextNode( element );
				node.appendChild(textnode);
				document.getElementsByClassName('thoughts__main')[0].appendChild(node);
			});
		}
	}, [thoughts])
	

	return (
		<div className="thoughts">
			<Header/>

			<div className="thoughts__main">
				
			</div>

			<div className="thoughts__form">
				<input className="thoughts__form-input" placeholder="type here" name="thought" id='thought'></input>

				<div className="thoughts__form-safe" onClick={ () => submit() }>
					<h1 className="thoughts__form-safe-text">Gedachten opslaan</h1>
					<img className="thoughts__form-safe-img" src={Assets.Button} ></img>
				</div>

			</div>
			

		</div>
	)
}

export default Thoughts;


