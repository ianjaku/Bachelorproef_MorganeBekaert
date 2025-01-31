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
			<img alt="Zieke Grote Boom" className="story17__tree" src={Assets.SickTree2}></img>
			<img alt="Snuitertje" className="story17__snuitertje" src={Assets.SnuitertjeStand}></img>
			<img alt="Vergrootglas" className="story17__magnifyingGlass" src={Assets.MagnifyingGlass} onClick={ () => history.push('/story/18') }></img>
			<img alt="Dokter" className="story17__doctor" src={Assets.DoctorTree}></img>
			
			<p className="story17__text">
			Nu is het tijd voor een nieuwe behandeling.
			De dokter tekent lijnen op de schors. 
			Dan zet hij een soort vergrootglas op Grote Boom.
			‘Misschien zitten er nog eitjes van de houtwormpjes onder de schors.
			Die kan ik dan wegstralen met deze lens.’

			Snuiter kijkt nieuwsgierig naar het vergrootglas. 
			<strong> Klik op het vergrootglas</strong> om te zien wat er gebeurt.
			</p>
			
			<Footer audio={Assets.mp3_story17} />

		</div>
	)
}

export default Story17;
