import { default as React } from 'react';
import * as Assets from '../../assets';
import { Header, Footer } from '../../components';

import './story.scss';

const Story03 = () => {

    const styleSheet = document.styleSheets[0];
	const keyframes = 
	`@-webkit-keyframes doctor {
        0% {-webkit-transform: translateX(50vw) rotate(10deg) translateY(20px); } 
        50% {-webkit-transform: rotate(-5deg) translateY(20px); } 
        100% {-webkit-transform: translateX(70px) translateY(20px); }
    }`;
	styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

	return (
		<div className="story03">
			<Header/>
			<img className="story03__sun" src={Assets.Sun}></img>
			<img className="story03__bird" src={Assets.Bird}></img>
			<img className="story03__tree" src={Assets.TreeSickBranch}></img>
			<img className="story03__snuitertje" src={Assets.SnuitertjeBasic}></img>
			<img className="story03__doctor" src={Assets.DoctorStetoscope} style={{animation: 'doctor ease-in-out 30s forwards'}}></img>

			<p className="story03__text">
			Op een dag komt de dokter in het bos. 
			Hij komt alle bomen bekijken. Ook Grote Boom.
			De dokter trekt een ernstig gezicht. 
			Hij zegt tegen Grote Boom:‘Ik heb slecht nieuws. 
			Er wonen houtwormpjes onder de schors van één van je takken.'
			<br></br><br></br>
			Snuiter heeft nog nooit van houtwormpjes gehoord. 
			Maar het klinkt heel ernstig. Snuiter moet er van huilen.
			De dokter probeert Snuiter te troosten: ‘Ik ga mijn best doen
			om de houtwormpjes te verjagen.'
			</p>

			<Footer audio={Assets.mp3_story3} />

		</div>
	)
}

export default Story03;
