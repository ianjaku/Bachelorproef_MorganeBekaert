import { default as React, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Draggable from 'react-draggable';

import * as Assets from '../../assets';
import { Header, Footer } from '../../components';

import './story.scss';

const Story13 = () => {
	const history = useHistory();

	const crownRef = useRef();

	const onDrop = (e) => {
		console.log('Released the drop component');
		if (e.classList.contains("hovered")) {
			history.push('/story/14');
		}
	};

	const onDropAreaMouseHover = (e) => {
		console.log('Released the drop component inside the dropzone');
		e.classList.add('hovered');
	}


	return (
		<div className="story13">
			<Header/>
			<img className="story13__tree" src={Assets.SickTree}></img>
			<img className="story13__snuitertje" src={Assets.SnuitertjeStand}></img>
			<img className="story13__sheep" src={Assets.SheepSharp}></img>

			
			<p className="story13__text">
			Snuiter wil ook iets moois maken van de afgevallen blaadjes.
			Snuitertje heeft een kroon gemaakt van de afgevallen blaadjes.
			Zoeken jullie de kroon?
			<br></br><br></br>
			<strong>Geef de kroon aan Snuitertje.</strong>
			</p>

			<Draggable onStop={() => onDrop(crownRef.current)} >
				<img className="story13__crown" src={Assets.Crown} ref={crownRef}></img>
			</Draggable>


			<div id="dropzone13" onMouseOver={() => onDropAreaMouseHover(crownRef.current)}></div>

			<Footer audio={Assets.mp3_story13} />

		</div>
	)
}

export default Story13;
