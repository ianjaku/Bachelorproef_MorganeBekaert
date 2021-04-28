import { default as React } from 'react';
import { useHistory } from 'react-router-dom';
import * as Assets from '../../assets';
import { Header, Footer } from '../../components';

import './story.scss';

const Story14 = () => {
	const history = useHistory();

	return (
		<div className="story14">
			<Header/>
			<img className="story14__bigStone" src={Assets.BigStone}></img>
			<img className="story14__snuitertje" src={Assets.SnuitertjeCrown}></img>
			<img className="story14__snuitertje2" src={Assets.SnuitertjeCrown}></img>
			<img className="story14__stone" src={Assets.Stone}></img>
			
			<p className="story14__text">
			Het is een prachtige kroon geworden! Grote Boom is trots op Snuiter.
			De blaadjes staan Snuiter goed. Met de kroon op zijn hoofd
			huppelt Snuiter naar de rivier. Hij gaat het steentje van vandaag
			in het water gooien.
			Hij moet lachen om zijn spiegelbeeld in de rivier.
			Snuiter vindt dat Grote Boom er vandaag heel goed uit ziet.
			Nu zal Grote Boom wel snel genezen zijn, denkt Snuiter.
			</p>

			<Footer audio={Assets.mp3_story14} />

		</div>
	)
}

export default Story14;
