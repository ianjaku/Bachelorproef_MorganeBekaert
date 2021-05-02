import { default as React, useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import * as Images from '../../assets';

import './footer.scss';

const Footer = ({audio}) => {
	const history = useHistory();
	
	// AudioPlayer
	const [ isPlaying, setIsPlaying ] = useState(true);
	const audioRef = useRef(new Audio(audio));

	const playAudio = () => {
		audioRef.current.play();
		setIsPlaying(false);
	}
	const pauseAudio = () => {
		audioRef.current.pause();
		setIsPlaying(true);
	}

	// progression
	const storyNumber = parseInt(window.location.pathname.split('/')[2]);
	const AMOUNTOFSTORIES = 20;
	const width = ( storyNumber / AMOUNTOFSTORIES ) * 100;

	const style = {
		height: '14px',
		width: width + '%'
	}

	const navigateToPreviousStory = () => {
		audioRef.current.pause();
		history.push('/story/' + ( parseInt(window.location.pathname.split('/')[2]) - 1 ));
	}
	const navigateToNextStory = () => {
		audioRef.current.pause();
		history.push('/story/' + ( parseInt(window.location.pathname.split('/')[2]) + 1 ));
	}

	return (
		<div className="footer">

			<div className="footer__audioplayer">
				{/* When the toggle is TRUE, show the play button */}
				{isPlaying && <img className="footer__audioplayer-play" src={Images.ButtonPlay} onClick={() => playAudio()}></img>}
				{/* When the toggle is FALSE, show the pause button */}
				{!isPlaying && <img className="footer__audioplayer-pause" src={Images.ButtonPause} onClick={() => pauseAudio()}></img>}
			</div>

			<div className="footer__progression">
				<div className="footer__progression-bar" style={style}></div>
				<img className="footer__progression-back" src={Images.ArrowBack} onClick={() => navigateToPreviousStory()}></img>
				<img className="footer__progression-next" src={Images.ArrowNext} onClick={() => navigateToNextStory()}></img>
			</div>

		</div>
	)
}

export default Footer;
