import { default as React } from 'react';
import { useHistory } from 'react-router-dom';
import * as Assets from '../../assets';
import { Header, Footer } from '../../components';

import './story.scss';

const Story17 = () => {
	const history = useHistory();

	return (
		<div className="story17">
			<Header/>
			<img className="story17__tree" src={Assets.SickTree2}></img>
			<img className="story17__snuitertje" src={Assets.SnuitertjeStand}></img>
			<img className="story17__magnifyingGlass" src={Assets.MagnifyingGlassLight}></img>
			<img className="story17__doctor" src={Assets.DoctorTree}></img>
			
			<p className="story17__text">
			De stralen schijnen op Grote Boom zijn schors.
			Het duurt maar heel even. Dan is de dokter weer weg. 
			De volgende dag doet de dokter precies hetzelfde. 
			En de dag daarna opnieuw. En opnieuw…
			De zonnestralen maken de schors van Grote Boom helemaal zwart.
			‘Dat is normaal!’ zegt de dokter. 
			</p>

			<Footer audio={Assets.mp3_story17} />
			
		</div>
	)
}

export default Story17;
