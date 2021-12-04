import React, { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './mealItemForm.module.css';

function MealItemForm(props) {
	const [isValid, setIsValid] = useState(true);
	const amountInputRef = useRef();

	const submitHandler = (event) => {
		event.preventDefault();
		// console.log(amountInputRef.current);
		const amount = amountInputRef.current.value;
		const amountNo = +amount;
		if (amount.trim() === '' || amountNo < 1 || amountNo > 5) {
			setIsValid(false);
			return;
		}
		props.addToCart(amountNo);
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<Input
				ref={amountInputRef}
				label='amount'
				input={{
					id: 'amount' + props.id,
					type: 'number',
					min: '1',
					max: '5',
					step: '1',
					defaultValue: '1',
				}}
			/>
			<button>+ Add</button>
			{!isValid && <p>enter a valid amount</p>}
		</form>
	);
}

export default MealItemForm;
