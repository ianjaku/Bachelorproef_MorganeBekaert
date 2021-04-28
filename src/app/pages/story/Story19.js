import { default as React, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Draggable from 'react-draggable';
import * as Assets from '../../assets';
import { Header, Footer } from '../../components';

import './story.scss';

const Story19 = () => {
	const history = useHistory();
	const acornRef = useRef();

	const onDrop = (e) => {
		console.log('Released the drop component');
		if (e.classList.contains("hovered")) {
			history.push('/story/20');
		}
	};

	const onDropAreaMouseHover = (e) => {
		console.log('Released the drop component inside the dropzone');
		e.classList.add('hovered');
	}



	return (
		<div className="story19">
			
			<img className="story19__tree" src={Assets.OtherTree}></img>
			<img className="story19__snuitertje" src={Assets.SnuitertjeStand}></img>
			<img className="story19__jar" src={Assets.JarWithSoil}></img>
			<img className="story19__acornsRight" src={Assets.Acorns}></img>
			<img className="story19__acornsLeft" src={Assets.Acorns}></img>
			<Header/>
			
			<p className="story19__text">
			Snuiter vult zijn lege pot met aarde.
			Hij wil er een nootje van Grote Boom in duwen.
			<br></br><br></br>
			Helpen jullie mee? 
			<br></br>Zoek het nootje van Grote Boom dat je kan slepen en stop het in de bokaal.
			</p>

			<Draggable onStop={() => onDrop(acornRef.current)} >
				<img className="story19__acorn" src={Assets.Acorn} ref={acornRef}></img>
			</Draggable>

			<div id="dropzone19" onMouseOver={() => onDropAreaMouseHover(acornRef.current)}></div>

			<Footer audio={Assets.mp3_story19} />

		</div>
	)
}

export default Story19;
