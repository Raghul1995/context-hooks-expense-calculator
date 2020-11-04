import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
//to get the total balance and get only the amount from ExpenseContext
function Balance() {
	const { transactions } = useContext(ExpenseContext);

	const amounts = transactions.map((transaction) => transaction.amount); //map to get the amount frpm "ExpenseContexxt"
	const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2); // to add the sum in the "transaction list" we use reduce and "toFixed" -Convert a number into a string, rounding the number to keep only two decimals:
	return (
		<div>
			<h2>${total}</h2>
		</div>
	);
}

export default Balance;
