//import { v4 as uuidv4 } from 'uuid';

//pure functions that takes an action

export default (state, action) => {
	switch (action.type) {
		case 'ADD_TRANSACTION':
			return {
				...state,
				transactions: [ action.payload, ...state.transactions ]
			};

		case 'DELETE_TRANSACTION': // we get this from ExpenseContext and perform filter method
			return {
				...state,
				transactions: state.transactions.filter((transaction) => transaction.id !== action.payload)
			};
		default:
			return state;
	}
};
