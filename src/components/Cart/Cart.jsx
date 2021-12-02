import React from 'react';
import Modal from '../UI/Modal';
import classes from './cart.module.css';

function Cart(props) {
	const cartItems = [
		{
			id: 'm1',
			name: 'Sushi',
			description: 'Finest fish and veggies',
			price: 22.99,
		},
	];
	return (
		<Modal onHide={props.onHide}>
			<ul className={classes['cart-items']}>
				{cartItems.map((item) => {
					return <li>{item.name}</li>;
				})}
			</ul>
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>11.22</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']} onClick={props.onHide}>
					Close
				</button>
				<button className={classes.button}>Order</button>
			</div>
		</Modal>
	);
}

export default Cart;
