import './App.css';
import AddEntry from './components/AddEntry';
import Balance from './components/Balance';
import Header from './components/Header';
import IncumExp from './components/IncumExp';
import TransactionList from './components/TransactionList';
import ExpenseContextProvider from './context/ExpenseContext';

function App() {
  return (
      <ExpenseContextProvider>
      <Header/>
      <div>
      <Balance/>
      <IncumExp/>
      <TransactionList/>
      <AddEntry/>
      </div>
      </ExpenseContextProvider>
    
  );
}

export default App;
