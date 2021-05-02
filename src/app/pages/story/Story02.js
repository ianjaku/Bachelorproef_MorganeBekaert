import { default as React, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Assets from '../../assets';
import { Header, Footer } from '../../components';

import './story.scss';

const Story02 = () => {
	const history = useHistory();

	const [ score, setScore ] = useState(0);

	if ( score === 10 ) {
		history.push('/story/3');
	}

	const game = () => {
		const style = {
			transform: 'translateY(' + Math.random()*90 + 'vh) translateX(' + Math.random()*80 + 'vw) rotate(' + Math.random()*360 + 'deg)',
		}

		return (
			<img 
				className="story02__game-element" src={Assets.Acorn} 
				onClick={ () => setScore(score + 1) }
				style= { style }
			></img>
		)
	}

	return (
		<div className="story02">
			<Header/>
			<img className="story02__sun" src={Assets.Sun}></img>
			<img className="story02__bird" src={Assets.Bird}></img>
			<img className="story02__tree" src={Assets.TreeGame}></img>
			<img className="story02__snuitertje" src={Assets.SnuitertjeStand}></img>

			<h2 className="story02__text">Snuitertje speelt graag spelletjes met Grote Boom.
											Helpen jullie mee om 10 eikels van Grote Boom te vangen?
											Zoek de eikels en tik er op.</h2>
			<h1 className="story02__score">{score}</h1>
			<div className="story02__game">
				{ game() }
			</div>

			<Footer audio={Assets.mp3_story2} />

		</div>
	)
}

export default Story02;
