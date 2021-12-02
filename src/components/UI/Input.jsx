import React from 'react';
import classes from './input.module.css';

const Input = React.forwardRef(({ input, label }, ref) => {
	return (
		<div className={classes.input}>
			<label htmlFor={input.id}>{label}</label>
			<input {...input} ref={ref} />
		</div>
	);
});

export default Input;
