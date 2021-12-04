import React, { useState, useEffect } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './headerCartButton.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

function HeaderCartButton(props) {
	const [animation, setAnimation] = useState(false);
	const { items } = useContext(CartContext);

	const totalItemCount = items.reduce((acc, item) => {
		return acc + item.amount;
	}, 0);

	const btnClass = `${classes.button} ${animation && classes.bump}`;

	useEffect(() => {
		if (items.length === 0) return;
		setAnimation(true);
		const timer = setTimeout(() => {
			setAnimation(false);
		}, 300);
		return () => {
			clearTimeout(timer);
		};
	}, [items]);

	return (
		<button className={btnClass} onClick={props.onShow}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{totalItemCount}</span>
		</button>
	);
}

export default HeaderCartButton;
