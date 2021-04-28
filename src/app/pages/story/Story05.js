import { default as React, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Draggable from 'react-draggable';
import * as Assets from '../../assets';
import { Header, Footer } from '../../components';

import './story.scss';

const Story05 = () => {
	const history = useHistory();

	// 1. Make the ref for the image
	const sawRef = useRef();

	const onDrop = (e) => {
		console.log('Released the drop component');
		if (e.classList.contains("hovered")) {
			history.push('/story/6');
		}
	};

	const onDropAreaMouseHover = (e) => {
		console.log('Released the drop component inside the dropzone');
		e.classList.add('hovered');
	}

	return (
		<div className="story05">
			<Header/>
			<img className="story05__sun" src={Assets.Sun}></img>
			<img className="story05__bird" src={Assets.Bird}></img>
			<img className="story05__tree" src={Assets.TreeSickBranch}></img>
			<img className="story05__doctor" src={Assets.DoctorTree}></img>
			<img className="story05__snuitertje" src={Assets.SnuitertjeStand}></img>
			<img className="story05__kit" src={Assets.KitWithoutSaw}></img>

			<p className="story05__text">
			De volgende dag komt de dokter terug. 
			Hij heeft een koffertje met operatiespullen bij zich.
			'De tak met de houtwormpjes moet ik wegsnijden,' legt hij
			Snuitertje uit.
			'Als ik dit niet doe, zit Grote Boom binnenkort 
			helemaal vol houtwormpjes die bomen kapot maken.'
			<br></br><br></br>
			Helpen jullie mee met de dokter?
			<strong> Sleep de zaag naar de zieke tak </strong>
			om de dokter te helpen met de operatie.

			</p>

			{/* onDrop happens when the drag component gets released */}
			<Draggable onStop={() => onDrop(sawRef.current)} >
				<img className="story05__saw" src={Assets.Saw} ref={sawRef}></img>
			</Draggable>

			<div id="dropzone5" onMouseOver={() => onDropAreaMouseHover(sawRef.current)}></div>

			<Footer audio={Assets.mp3_story5} />
		</div>
	
	)
}

export default Story05;
