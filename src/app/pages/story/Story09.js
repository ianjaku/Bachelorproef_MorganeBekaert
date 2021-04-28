import { default as React } from 'react';
import { useHistory } from 'react-router-dom';
import * as Assets from '../../assets';
import { Header, Footer } from '../../components';

import './story.scss';

const Story09 = () => {
	const history = useHistory();

	return (
		<div className="story09">
			<Header/>
			<img className="story09__sun" src={Assets.Sun}></img>
			<img className="story09__bird" src={Assets.Bird}></img>
			<img className="story09__tree" src={Assets.TreeWithoutSickBranch}></img>
			<img className="story09__medicin" src={Assets.Medicin}></img>
			<img className="story09__plaster" src={Assets.Plaster}></img>
			<img className="story09__sickBranch" src={Assets.SickBranch2}></img>
			<img className="story09__snuitertje" src={Assets.SnuitertjeAngry2} onClick={ () => history.push('/story/10') }></img>
			
			<p className="story09__text">
			Het medicijn maakt Grote Boom inderdaad heel erg ziek. 
			Er komen veel vrienden op bezoek. 
			Ze willen Grote Boom opvrolijken.
			Ze spelen spelletjes rond Grote Boom 
			en vertellen verhaaltjes. 
			<br></br><br></br>
			Zien jullie waar Snuiter verstopt zit?
			<br></br><br></br>
			Klik op Snuiter om te zien 
			wat hij aan het doen is.
			</p>

			<Footer audio={Assets.mp3_story9} />

		</div>
	)
}

export default Story09;
