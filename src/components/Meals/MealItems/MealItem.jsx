import React, { useContext } from 'react';
import MealItemForm from './MealItemForm';
import classes from './mealItems.module.css';
import CartContext from '../../../store/cart-context';

function MealItem(props) {
	const CartCtx = useContext(CartContext);
	const price = `$${props.price.toFixed(2)}`;
	// console.log(props.id);
	const addToCartHandler = (amount) => {
		CartCtx.addItem({
			name: props.title,
			price: props.price,
			amount: amount,
			id: props.id,
		});
	};

	return (
		<li className={classes.meal}>
			<div>
				<h3>{props.title}</h3>
				<div className={classes.description}>{props.desc}</div>
				<div className={classes.price}>{price}</div>
			</div>
			<div>
				<MealItemForm id={props.id} addToCart={addToCartHandler} />
			</div>
		</li>
	);
}

export default MealItem;
