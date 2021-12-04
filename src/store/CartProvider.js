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
			const newTotalAmount =
				state.totalAmount + action.item.amount * action.item.price;
			const ifPresentThenIndex = state.items.findIndex((item) => {
				return item.id === action.item.id;
			});
			// console.log(ifPresentThenIndex);
			let newItems;
			let updatedItem;
			if (ifPresentThenIndex === -1) {
				newItems = [...state.items, action.item];
			} else {
				updatedItem = {
					...state.items[ifPresentThenIndex],
					amount:
						state.items[ifPresentThenIndex].amount + action.item.amount,
				};
				newItems = [...state.items];
				newItems[ifPresentThenIndex] = updatedItem;
			}
			return {
				items: newItems,
				totalAmount: newTotalAmount,
			};
		}

		case 'REMOVE': {
			const ifPresentThenIndex = state.items.findIndex((item) => {
				return item.id === action.id;
			});
			const newTotalAmount =
				state.totalAmount - state.items[ifPresentThenIndex].price;
			let newItems;
			let updatedItem;
			if (state.items[ifPresentThenIndex].amount > 1) {
				updatedItem = {
					...state.items[ifPresentThenIndex],
					amount: state.items[ifPresentThenIndex].amount - 1,
				};
				newItems = [...state.items];
				newItems[ifPresentThenIndex] = updatedItem;
			} else {
				newItems = state.items.filter((item) => {
					return item.id !== action.id;
				});
			}
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
