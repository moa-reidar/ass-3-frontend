import React, { useState, useEffect } from 'react';
import './css/reset.css';
import './css/variables.css';
import './css/style.css';
import ExpenseForm from './components/ExpenseForm';

//Leser fra localStorage ved oppstart
function App() {
  const [expenses, setExpenses] = useState(() => {
    const storedExpenses = localStorage.getItem('expenses');
    return storedExpenses ? JSON.parse(storedExpenses) : [];
  });
// Legger til nye utgifter
  const handleAddExpense = (expenseData) => {
    const newExpense = {
      ...expenseData,
      id: Math.random().toString(), // gir en midlertidig unik ID
    };
    setExpenses((prev) => [newExpense, ...prev]);
    console.log('Lagret utgift:', newExpense);
  };

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, []); 

  return (
    <div className="app">
      <h1 className="app__title">Expense Tracker</h1>
      <ExpenseForm onAddExpense={handleAddExpense} />
    </div>
  );
}

export default App;
