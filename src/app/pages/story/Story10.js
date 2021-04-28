import { default as React } from 'react';
import { useHistory } from 'react-router-dom';
import * as Assets from '../../assets';
import { Header, Footer } from '../../components';

import './story.scss';

const Story10 = () => {
	const history = useHistory();

	return (
		<div className="story10">

			<img className="story10__tree" src={Assets.OtherTree}></img>
			<img className="story10__snuitertje" src={Assets.SnuitertjeAngry}></img>
			<img className="story10__owl" src={Assets.Owl}></img>
			<Header/>
			
			<p className="story10__text">		 
				Snuiter verveelt zich. Hij is boos. 
				‘Waarom moet Grote Boom nu wormpjes krijgen?’ bromt hij. 
				Hij geeft een schop tegen een andere boom. 
				Oehoe de Uil heeft het gezien. 
			</p>

			<p className="story10__text2">
			‘Ik begrijp dat je boos bent. Maar andere bomen pijn doen mag niet hoor!’ zegt Oehoe.  
			{/* // mag niet, hoor ??? */}
			<br></br><br></br>
			Oehoe is erg slim. 
			Hij weet veel over bomen en ook over houtwormpjes.
			Dus vraagt Snuiter aan Oehoe: ‘Waarom heeft Grote Boom houtwormpjes?’ 
			‘Dat is een heel moeilijke vraag…’ zucht Oehoe.
			‘Het is niemands schuld! 
			De ene boom heeft houtwormpjes, de andere niet. Zo is het leven!’
			</p>

			<img className="story10__arrow" src={Assets.ArrowNext} onClick={ () => history.push('/story/11') }></img>

			<Footer audio={Assets.mp3_story10} />

		</div>
	)
}

export default Story10;
