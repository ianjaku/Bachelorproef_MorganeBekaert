import { default as React, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Images from '../../assets';
import { Progression } from '../../components';

import './menu.scss';

const Menu = () => {
	const history = useHistory();

	return (
		<div className="menu">

			<img className="menu__tree" src={Images.TreeStart}></img>
		
			<div className="menu__wrapper">
				<h1 onClick={() => history.push('/story/1')}>Het verhaal van Snuitertje</h1>
				<h1 onClick={() => history.push('/thoughts')}>Mijn gedachten</h1>
			</div>


		</div>
	)
}

export default Menu;
