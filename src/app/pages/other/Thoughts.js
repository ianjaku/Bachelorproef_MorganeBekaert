import { default as React, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as Assets from '../../assets';
import { Header  } from '../../components';

import './thoughts.scss';

const Thoughts = () => {
	const history = useHistory();
	const [thoughts, setThoughts] = useState(localStorage.getItem('myData') ?  JSON.parse(localStorage.getItem('myData')) : [])

	const submit = () => {
		const thought = document.getElementById('thought').value;
		document.getElementById('thought').value = '';
		setThoughts([...thoughts, thought]);
	}
	const remove = () => {
		localStorage.removeItem('myData');
		window.location.reload();
		console.log('remove');
	}

	useEffect(() => {
		if (thoughts.length === 0) {
			return ''
		} else {
			localStorage.setItem('myData', JSON.stringify(thoughts));
			document.getElementsByClassName('thoughts__main')[0].innerHTML = ""
			thoughts.forEach(element => {
				//create container
				const container = document.createElement('div');
				container.className = 'thoughts__main-element';
				//create textnode
				const h1 = document.createElement('h1');
				h1.className = 'thoughts__main-element-text';
				h1.innerHTML = element
				//create button
				const p = document.createElement('p');
				p.className = 'thoughts__main-element-btn';
				p.innerHTML = '&#x2716'
				p.onclick = (() =>{
					container.style = 'display: none;';
					const index = thoughts.indexOf(element)
					thoughts.splice(index, 1)
					localStorage.setItem('myData', JSON.stringify(thoughts));
				} )

				container.appendChild(h1);
				container.appendChild(p);

				document.getElementsByClassName('thoughts__main')[0].appendChild(container);
			});
		}
	}, [thoughts])

	return (
		<div className="thoughts">
			<Header/>

			<div className="thoughts__main">
				
			</div>

			<div className="thoughts__form">
				<input required className="thoughts__form-input" placeholder="Waar denk je aan?" name="thought" id='thought'></input>

				<div className="thoughts__form-safe" onClick={ () => submit() }>
					<h1 className="thoughts__form-safe-text">Gedachten opslaan</h1>
					<img alt="opslaan" className="thoughts__form-safe-img" src={Assets.Button} ></img>
				</div>
			</div>
			
			<div className="thoughts__delete" onClick={ () => remove() }>
					<h1 className="thoughts__delete-text">Verwijder alles</h1>
					<img alt="verwijderAlles" className="thoughts__delete-img" src={Assets.Button} ></img>
				</div>

		</div>
	)
}

export default Thoughts;

