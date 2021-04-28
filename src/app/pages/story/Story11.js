import { default as React } from 'react';
import { useHistory } from 'react-router-dom';
import * as Assets from '../../assets';
import { Header, Footer } from '../../components';

import './story.scss';

const Story11 = () => {
	const history = useHistory();

	return (
		<div className="story11">
			<Header/>
			<img className="story11__tree" src={Assets.SickTree}></img>
			<img className="story11__snuitertje" src={Assets.SnuitertjeStand}></img>
			
			<p className="story11__text">
			De takken van Grote Boom worden steeds slapper. 
			Alle blaadjes vallen op de grond. Snuiter heeft Grote Boom
			nog nooit zo ziek gezien. De kale kruin ziet er raar uit.
			Snuiter wordt er bang van.
			</p>

			<Footer audio={Assets.mp3_story11} />

		</div>
	)
}

export default Story11;
