import { default as React } from 'react';
import { useHistory } from 'react-router-dom';
import * as Assets from '../../assets';
import { Header, Footer } from '../../components';

import './story.scss';

const Story20 = () => {
	const history = useHistory();

	return (
		<div className="story20">
			<Header/>
			<img className="story20__sun" src={Assets.Sun}></img>
			<img className="story20__tree" src={Assets.TreeCured}></img>
			<img className="story20__sheepBunnny" src={Assets.SheepBunny}></img>
			<img className="story20__jar" src={Assets.JarWithTree}></img>

			<p className="story20__text">
			Elke dag worden de takken van Grote Boom een beetje sterker.
			Grote Boom kan de schommel van Snuiter weer dragen. Iedereen is blij.
			Snuiter schommelt vrolijk heen en weer. 
			‘Ik wist het wel, hoor,’ zegt hij tegen Grote Boom, 
			‘jij bent de sterkste boom van het hele bos!’
			</p>
			<p className="story20__text2">
			En in de pot groeit ondertussen een Kleine Boom…
			{/* En in de pot groeit ondertussen Kleine Boom… */}

			</p>

			<Footer audio={Assets.mp3_story20} />

		</div>
	)
}

export default Story20;
