import React from 'react';
import ReactDOM from 'react-dom';
import classes from './modal.module.css';
const Backdrop = (props) => {
	return <div className={classes.backdrop} onClick={props.onHide}></div>;
};
const Overlay = (props) => {
	return (
		<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>
	);
};
const portalElement = document.getElementById('overlays');
function Modal(props) {
	return (
		<>
			<div>
				{ReactDOM.createPortal(
					<Backdrop onHide={props.onHide} />,
					portalElement
				)}
			</div>
			;
			<div>
				{ReactDOM.createPortal(
					<Overlay>{props.children}</Overlay>,
					portalElement
				)}
			</div>
			;
		</>
	);
}

export default Modal;
