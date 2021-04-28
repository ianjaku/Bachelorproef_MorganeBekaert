import { default as React, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Draggable from 'react-draggable';

import * as Assets from '../../assets';
import { Header, Footer } from '../../components';

import './story.scss';

const Story08 = () => {
	const history = useHistory();

	const stoneRef = useRef();

	const onDrop = (e) => {
		console.log('Released the drop component');
		if (e.classList.contains("hovered")) {
			history.push('/story/9');
		}
	};

	const onDropAreaMouseHover = (e) => {
		console.log('Released the drop component inside the dropzone');
		e.classList.add('hovered');
	}


	return (
		<div className="story08">
			<Header/>
			<img className="story08__sun" src={Assets.Sun}></img>
			<img className="story08__bird" src={Assets.Bird}></img>
			<img className="story08__tree" src={Assets.TreeWithoutSickBranch}></img>
			<img className="story08__medicin" src={Assets.Medicin}></img>
			<img className="story08__plaster" src={Assets.Plaster}></img>
			<img className="story07__sickBranch" src={Assets.SickBranch2}></img>


			<img className="story08__jar" src={Assets.JarFull}></img>
			<img className="story08__doctor" src={Assets.DoctorStone}></img>
			<img className="story08__snuitertje" src={Assets.SnuitertjeStand}></img>

			<p className="story08__text">
			De dokter geeft Snuiter een grote pot met steentjes.
			‘Iedere dag mag jij één steentje uit de pot halen.
			Op een dag is de pot leeg. Vanaf die dag kan Grote Boom
			weer beter worden.’ 
			Snuiter kijkt verdrietig naar de pot. 'Er zitten zoveel steentjes in!'
			</p>
			<p className="story08__text2">
			Helpen jullie mee om het eerste steentje eruit te halen?
			{/* eruit of er uit */}
			<strong> Neem het steentje</strong> bovenaan in de pot en geef het aan Snuitertje.
			</p>

			<Draggable onStop={() => onDrop(stoneRef.current)} >
				<img className="story08__stone" src={Assets.Stone2} ref={stoneRef}></img>
			</Draggable>

			<div id="dropzone8" onMouseOver={() => onDropAreaMouseHover(stoneRef.current)}></div>

			<Footer audio={Assets.mp3_story8} />

		</div>
	)
}

export default Story08;
