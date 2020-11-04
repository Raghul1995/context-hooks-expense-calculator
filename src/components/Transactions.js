import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

function Transactions({ transaction }) {
	// since we destrucutred the transaction from "trnsactionList" we use the below options.
	const { delTransaction } = useContext(ExpenseContext);
	const sign = transaction.amount < 0 ? '-' : '+'; //check if the num is + or - and change color accordingly
	return (
		<li className={transaction.amount < 0 ? 'minus' : 'plus'}>
			{' '}
			{/* change border color if num is + or -  */}
			{transaction.text}
			<span>
				{sign}${Math.abs(transaction.amount)}
			</span>{' '}
			{/* Math.abs('-1');  // 1 - returns postive even for a negative number  */}
			<button onClick={() => delTransaction(transaction.id)} className="del-btn">
				x
			</button>{' '}
			{/* deleting the trnsaction list by getting the id */}
		</li>
	);
}

export default Transactions;
