import { default as React } from 'react';
import { useHistory } from 'react-router-dom';
import * as Assets from '../../assets';
import { Header, Footer } from '../../components';

import './story.scss';

const Story15 = () => {

	const styleSheet = document.styleSheets[0];
	const keyframes = 
	`@-webkit-keyframes doctor {
        0% {-webkit-transform: translateX(0); } 
        100% {-webkit-transform: translateX(-45vw) translateY(180px); }
    }`;
	styleSheet.insertRule(keyframes, styleSheet.cssRules.length);


	return (
		<div className="story15">
			<Header/>
			<img className="story08__sun" src={Assets.Sun}></img>
			<img className="story15__tree" src={Assets.SickTreeSharp}></img>
			<img className="story15__snuitertje" src={Assets.SnuitertjeBlanket}></img>
			<img className="story15__doctor" src={Assets.DoctorStand} style={{animation: 'doctor ease-in 20s forwards'}}></img>
			
			<p className="story15__text">
			Maar dan komt de dokter alweer. Met nieuwe medicijnen.
			En Grote Boom wordt weer heel moe en slap. Er zitten nog altijd veel steentjes in de pot.
			‘Kan ik iets doen voor Grote Boom?’ vraagt Snuiter aan de dokter.
			‘Niet zoveel. Speel maar gewoon stilletjes in de buurt. 
			Zo voelt Grote Boom zich minder alleen.’
			Grote Boom is erg moe. Snuiter legt een dekentje over de wortels.
			</p>


			<Footer audio={Assets.mp3_story15} />

		</div>
	)
}

export default Story15;
