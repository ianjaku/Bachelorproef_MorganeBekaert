import { default as React, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Images from '../../assets';
import { Progression, Button } from '../../components';

import './menu.scss';

const Menu = () => {
	const history = useHistory();

	return (
		<div className="menu">

			<img className="menu__tree" src={Images.TreeStart}></img>
		
			<div className="menu__wrapper">
				<Button text="VERHAAL" path="/story/0" />
 				<Button text="MIJN GEDACHTEN" path="/thoughts" />
			</div>



		</div>
	)
}

export default Menu;
