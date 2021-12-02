import React from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './headerCartButton.module.css';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

function HeaderCartButton(props) {
	const cartCtx = useContext(CartContext);
	const totalItemCount = cartCtx.items.reduce((acc, item) => {
		return acc + item.amount;
	}, 0);
	return (
		<button className={classes.button} onClick={props.onShow}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{totalItemCount}</span>
		</button>
	);
}

export default HeaderCartButton;
