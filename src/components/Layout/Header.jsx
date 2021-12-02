import React from 'react';
import classes from './header.module.css';
import mealImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
	return (
		<>
			<header className={classes.header}>
				<h1>ReactMels</h1>
				<HeaderCartButton onShow={props.onShow} />
			</header>
			<div className={classes['main-image']}>
				<img src={mealImage} alt='meals table' />
			</div>
		</>
	);
}

export default Header;
