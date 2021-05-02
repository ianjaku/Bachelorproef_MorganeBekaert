import { default as React } from 'react';
import { useHistory } from 'react-router-dom';
import * as Assets from '../../assets';
import { Header, Footer  } from '../../components';

import './story.scss';

const Story01 = () => {
	const history = useHistory();

	return (
		<div className="story01">
			<Header/>
			<h1>Snuiter speelt vaak in het bos, zijn beste vriend daar is Grote Boom.</h1>
			<img className="story01__sun" src={Assets.Sun} alt="sun"></img>
			<img className="story01__bird" src={Assets.Bird} alt="bird"></img>
			<img className="story01__tree" src={Assets.TreeStart} alt="tree"></img>
			<div className="story01__wrapper" onClick={ () => history.push('/story/2') }>
				<h2>Gaan jullie mee met Snuiter in het bos?</h2>
				<img className="story01__wrapper-arrow" src={Assets.ArrowNext}></img>
			</div>

			
			<Footer audio={Assets.mp3_story1} />

		</div>
	)
}

export default Story01;

