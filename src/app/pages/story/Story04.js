import { default as React } from 'react';
import { useHistory } from 'react-router-dom';
import * as Assets from '../../assets';
import { Header, Footer } from '../../components';

import './story.scss';

const Story04 = () => {
	const history = useHistory();

	const styleSheet = document.styleSheets[0];
	const moon = 
	`@-webkit-keyframes moon {
        0% {-webkit-transform: translateX(-40px) translateY(-200px); } 
        100% {-webkit-transform: translateX(0) translateY(40px); }
    }`;
	styleSheet.insertRule(moon, styleSheet.cssRules.length);
	
	const sun = 
	`@-webkit-keyframes sun {
        0% {-webkit-transform: translateX(0) translateY(0); }
        100% {-webkit-transform: translateX(290px) translateY(100px); } 
    }`;
	styleSheet.insertRule(sun, styleSheet.cssRules.length);

	const dawn = 
	`@-webkit-keyframes dawn {
        0% {opacity: 0; }
        100% {opacity: 0.6; } 
    }`;
	styleSheet.insertRule(dawn, styleSheet.cssRules.length);


	return (
		<div className="story04">

			<Header/>

			<div className="story04__dawn" style={{animation: 'dawn linear 15s forwards'}}></div>
			<img className="story04__sun" src={Assets.Sun} style={{animation: 'sun linear 10s forwards'}}></img>
			<img className="story04__moon" src={Assets.Moon} style={{animation: 'moon ease-in-out 16s forwards'}}></img>
			<img className="story04__bird" src={Assets.Bird} ></img>
			<img className="story04__tree" src={Assets.TreeSickBranch}></img>
			<img className="story04__snuitertje" src={Assets.SnuitertjeBasic}></img>
			<img className="story04__blanket" src={Assets.Blanket}></img>


			<div className="story04__wrapper">
				<p>Het is al laat als de dokter vertrekt.
				Het wordt donker in het bos. Snuitertje slaapt dicht bij
				Grote Boom, zo is hij zeker niet alleen. 
				</p>
			</div>
			

			<img className="story04__arrow" src={Assets.ArrowNext} onClick={ () => history.push('/story/5') }></img>


			<Footer audio={Assets.mp3_story4} />

		</div>
	)
}

export default Story04;
