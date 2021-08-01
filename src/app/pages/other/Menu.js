import { default as React, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import {ProgressionStoryContext} from '../../App.js'
import * as Images from '../../assets';
import { Button } from '../../components';

import './menu.scss';

const Menu = () => {
	const history = useHistory();
	const {story} = useContext(ProgressionStoryContext)

	return (
		<div className="menu">

			<img alt="boom" className="menu__tree" src={Images.TreeStart}></img>
		
			<div className="menu__wrapper">
				<Button text="START VERHAAL" path="/story/0" />
				<Button text="LEES VERDER" path={`/story/${story}`} />
 				<Button text="MIJN GEDACHTEN" path="/thoughts" />
			</div>



		</div>
	)
}

export default Menu;
