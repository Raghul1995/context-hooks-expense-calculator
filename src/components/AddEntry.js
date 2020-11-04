import React, { useState, useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import { v4 as uuidv4 } from 'uuid';

function AddEntry() {
	const { addTransaction } = useContext(ExpenseContext);
	const [ amount, setAmount ] = useState(0); //since its a integer, useState is set to 0
	const [ text, setText ] = useState(''); //since its a string, useState is set to empty

	const handleSubmit = (e) => {
		e.preventDefault();
		const nwTrans = {
			id: uuidv4(),
			amount: +amount, //turns this into anumber
			text
		};
		addTransaction(nwTrans);
		setAmount('');
		setText('');
	};

	return (
		<div>
			<h3> Add new transaction</h3>
			<form onSubmit={handleSubmit}>
				<div className="form-control">
					<label htmlFor="text">Text</label>
					<input
						type="text"
						placeholder="Enter text.."
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="amount">Amount</label>
					<input
						type="number"
						placeholder="Enter amount.."
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
					/>
				</div>
				<input type="submit" value="submit values" />
			</form>
		</div>
	);
}

export default AddEntry;
