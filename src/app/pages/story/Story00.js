import { default as React } from 'react';
import { useHistory } from 'react-router-dom';
import * as Assets from '../../assets';
import { Header } from '../../components';

import './story.scss';

const Story00 = () => {
	const history = useHistory();

	return (
		<div className="story00">
			<Header/>
			<div className="story00__wrapper">
				<h1>Draai je Ipad om, zo zal je het verhaal van Snuitertje beter kunnen lezen! </h1>
				<img className="story00__wrapper-turn" src={Assets.TurnScreen}></img>

			</div>
			<img className="story00__tree" src={Assets.TreeStart}></img>
			
			<img className="story00__arrow" src={Assets.ArrowNext} onClick={ () => history.push('/story/1') }></img>

		</div>
	)
}

export default Story00;
