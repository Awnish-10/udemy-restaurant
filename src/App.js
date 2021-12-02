import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import { useState } from 'react';
import CartProvider from './store/CartProvider';

function App() {
	const [showCart, setShowCart] = useState(false);
	const showHandler = () => {
		setShowCart(true);
	};
	const hideHandler = () => {
		setShowCart(false);
	};
	return (
		<CartProvider>
			{showCart && <Cart onHide={hideHandler} />}
			<Header onShow={showHandler} />
			<Meals />
		</CartProvider>
	);
}

export default App;
