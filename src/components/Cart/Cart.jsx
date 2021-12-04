import React, { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './cart.module.css';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

function Cart(props) {
	const CartCtx = useContext(CartContext);
	const totalCartPrice = `$${CartCtx.totalAmount.toFixed(2)}`;

	const addHandler = (item) => {
		CartCtx.addItem({ ...item, amount: 1 });
	};
	const removeHandler = (id) => {
		CartCtx.removeItem(id);
	};
	return (
		<Modal onHide={props.onHide}>
			<ul className={classes['cart-items']}>
				{CartCtx.items.map((item) => {
					return (
						<CartItem
							key={item.id}
							item={item}
							onAdd={addHandler}
							onRemove={removeHandler}
						/>
					);
				})}
			</ul>
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalCartPrice}</span>
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
