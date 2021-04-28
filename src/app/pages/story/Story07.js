import { default as React, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Draggable from 'react-draggable';
import * as Assets from '../../assets';
import { Header, Footer } from '../../components';

import './story.scss';

const Story07 = () => {
	const history = useHistory();
	
	const snuitertjeRef = useRef();

	const onDrop = (e) => {
		console.log('Released the drop component');
		if (e.classList.contains("hovered")) {
			history.push('/story/8');
		}
	};

	const onDropAreaMouseHover = (e) => {
		console.log('Released the drop component inside the dropzone');
		e.classList.add('hovered');
	}


	return (
		<div className="story07">
			<Header/>
			<img className="story07__sun" src={Assets.Sun}></img>
			<img className="story07__tree" src={Assets.TreeWithoutSickBranch}></img>
			<img className="story07__medicin" src={Assets.Medicin}></img>
			<img className="story07__plaster" src={Assets.Plaster}></img>
			<img className="story07__doctor" src={Assets.DoctorTree}></img>
			<img className="story07__sickBranch" src={Assets.SickBranch2}></img>
			<img className="story07__kit" src={Assets.KitWithoutSaw}></img>
			<img className="story07__saw" src={Assets.Saw}></img>
			
			<p className="story07__text">
			De dokter heeft nog een speciaal medicijn bij zich. 
			’Dat is nodig om de laatste houtwormpjes weg te jagen.’
			Maar het gaat Grote Boom wel ziek maken. 
			Pas daarna kan Grote Boom weer beter worden.
			<br></br><br></br>
			‘Wacht eens even,’ zegt Snuiter, ‘ik heb een beter idee!
			Ik geef Grote Boom elke dag een kusje. Daarvan gaan de
			wormpjes vast ook weg.’ ‘Kusjes en knuffels geven
			is zeker een goed idee,’ zegt de dokter, ‘maar
			alleen medicijnen kunnen houtwormpjes wegjagen.’
			<br></br><br></br>
			Laat Snuiter de boom een dikke knuffel geven! 
			Dit kan door <strong>Snuitertje naar de boom te slepen.</strong>
			</p>

			<Draggable onStop={() => onDrop(snuitertjeRef.current)} >
				<img className="story07__snuitertje" src={Assets.SnuitertjeHug} ref={snuitertjeRef}></img>
			</Draggable>

			<div id="dropzone7" onMouseOver={() => onDropAreaMouseHover(snuitertjeRef.current)}></div>

			<Footer audio={Assets.mp3_story7} />
			
		</div>
	)
}

export default Story07;
