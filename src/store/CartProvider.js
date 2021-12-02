import React from 'react';
import CartContext from './cart-context';
import { useReducer } from 'react';
const initialState = {
	items: [],
	totalAmount: 0,
};
const cartReducer = (state, action) => {
	switch (action.type) {
		case 'ADD': {
			const newItems = [...state.items, action.item];
			const newTotalAmount =
				state.totalAmount + action.item.amount * action.item.price;
			return {
				items: newItems,
				totalAmount: newTotalAmount,
			};
		}
		default:
			throw new Error();
	}
};

function CartProvider(props) {
	const [cartState, dispatch] = useReducer(cartReducer, initialState);
	const addItemToCartHandler = (item) => {
		dispatch({ type: 'ADD', item: item });
	};
	const removeItemFromCartHandler = (id) => {
		dispatch({ type: 'REMOVE', id: id });
	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
	};
	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
}

export default CartProvider;
