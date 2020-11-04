import React, { useContext } from 'react';
import { ExpenseContext } from '../context/ExpenseContext';

function IncumExp() {
	const { transactions } = useContext(ExpenseContext);
	const amounts = transactions.map((transaction) => transaction.amount);
	//both the below are vanilla JS to calclulate the income and expense and store it inth return statement
	const income = amounts.filter((amt) => amt > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
	const expense = amounts.filter((amt) => amt < 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
	return (
		<div className="inc-exp-container">
			<div>
				<h4>Income</h4>
				<p className="money plus">{income}</p>
			</div>
			<div>
				<h4>Expense</h4>
				<p className="money minus">{expense}</p>
			</div>
		</div>
	);
}

export default IncumExp;
