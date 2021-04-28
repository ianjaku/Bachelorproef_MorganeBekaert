import { default as React } from 'react';
import { useHistory } from 'react-router-dom';
import * as Assets from '../../assets';
import { Header, Footer } from '../../components';

import './story.scss';

const Story12 = () => {
	const history = useHistory();

	return (
		<div className="story12">
			<Header/>
			<img className="story12__tree" src={Assets.SickTree}></img>
			<img className="story12__snuitertje" src={Assets.SnuitertjeBasic}></img>
			<img className="story12__sheep" src={Assets.SheepSharp}></img>
			
			
			<p className="story12__text">
			Gelukkig komt schaapje Bessie op bezoek. 
			Ze heeft een cadeautje bij zich voor Grote Boom. Een wollen sjaal!
			‘Die is gemaakt van mijn eigen vacht’, zegt Bessie.
			Snuiter begrijpt het niet.
			</p>

			<p className="story12__text2">
			'Ieder jaar scheren de mensen me kaal. 
			Dan maken ze mooie dingen van mijn wol. 
			De eerste keer dat ik kaal en bloot rondliep,
			was ik verdrietig. 
			Maar mijn schapenkrulletjes kwamen
			vanzelf terug. 
			Grote Boom zal ook wel weer nieuwe blaadjes
			krijgen!’
			‘En nu is er een warme sjaal!’ roept Snuiter uit.
			Samen hangen ze de sjaal tussen 
			de takken van Grote Boom.
			Grote boom voelt zich meteen een beetje beter.
			</p>

			<Footer audio={Assets.mp3_story12} />

		</div>
	)
}

export default Story12;
