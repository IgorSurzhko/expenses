import React, { useState } from 'react';

import Card from '../UI/Card';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

//we can put the export command before the function declaration
export default function ExpenseItem(props) {
	const [title, setTitle] = useState(props.title);

	const clickHandler = () => {
		setTitle('hhhh');
		console.log(title);
	};

	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
			<button onClick={clickHandler}>Change title</button>
		</Card>
	);
}
