import { default as React, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Draggable from 'react-draggable';
import * as Assets from '../../assets';
import { Header, Footer } from '../../components';

import './story.scss';

const Story06 = () => {
	const history = useHistory();

	const branchRef = useRef();

	const onDrop = (e) => {
		console.log('Released the drop component');
		if (e.classList.contains("hovered")) {
			history.push('/story/7');
		}
	};

	const onDropAreaMouseHover = (e) => {
		console.log('Released the drop component inside the dropzone');
		e.classList.add('hovered');
	}

	return (
		<div className="story06">
			<Header/>
			<img className="story06__sun" src={Assets.Sun}></img>
			<img className="story06__bird" src={Assets.Bird}></img>
			<img className="story06__tree" src={Assets.TreeWithoutSickBranch}></img>
			<img className="story06__snuitertje" src={Assets.SnuitertjeStand}></img>
			<img className="story06__saw" src={Assets.Saw}></img>
			<img className="story06__doctor" src={Assets.DoctorTree}></img>
			<img className="story06__kit" src={Assets.KitWithoutSaw}></img>
-			
			<p className="story06__text">Trek nu aan de zieke tak om de dokter te helpen.
				Sleep de tak naar Snuitertje, die nieuwsgierig staat te kijken naar de dokter.
			</p>

			<Draggable onStop={() => onDrop(branchRef.current)} >
				<img className="story06__sickBranch" src={Assets.SickBranch} ref={branchRef}></img>
			</Draggable>

			<div id="dropzone6" onMouseOver={() => onDropAreaMouseHover(branchRef.current)}></div>
			
			<Footer audio={Assets.mp3_story6} />

		</div>
	)
}

export default Story06;
