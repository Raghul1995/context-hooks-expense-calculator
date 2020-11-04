import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';
import Transactions from './Transactions';

function TransactionList() {
	const { transactions } = useContext(ExpenseContext);

	return (
		<div>
			<h3>History</h3>
			<ul className="list">
				{transactions.map((transaction) => <Transactions key={transaction.id} transaction={transaction} />)}
			</ul>
		</div>
	);
}

export default TransactionList;
