import React, { useReducer, createContext } from 'react';
import AppReducers from '../reducers/AppReducers';
//Intial state
const initialState = {
	transactions: []
};

//createContext
export const ExpenseContext = createContext(initialState);
function ExpenseContextProvider(props) {
	const [ state, dispatch ] = useReducer(AppReducers, initialState);

	//Actions
	function delTransaction(id) {
		//we pass in .provider to be accessed by other components
		dispatch({
			type: 'DELETE_TRANSACTION',
			payload: id
		});
	}
	function addTransaction(transaction) {
		//we pass in .provider to be accessed by other components
		dispatch({
			type: 'ADD_TRANSACTION',
			payload: transaction // we send the entire object as payload
		});
	}
	return (
		<div>
			<ExpenseContext.Provider value={{ transactions: state.transactions, delTransaction, addTransaction }}>
				{props.children}
			</ExpenseContext.Provider>
		</div>
	);
}

export default ExpenseContextProvider;
