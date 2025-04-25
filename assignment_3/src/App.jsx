import React, { useState, useEffect } from 'react';
import './css/reset.css';
import './css/variables.css';
import './css/style.css';

import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList'; 

function App() {
  // Leser fra localStorage ved oppstart
  const [expenses, setExpenses] = useState(() => {
    const storedExpenses = localStorage.getItem('expenses');
    return storedExpenses ? JSON.parse(storedExpenses) : [];
  });

  const handleAddExpense = (expenseData) => {
    const newExpense = {
      ...expenseData,
      id: Math.random().toString(), // gir en midlertidig unik ID
    };
    setExpenses((prev) => [newExpense, ...prev]);
    console.log('Lagret utgift:', newExpense);
  };

  // Effekt kjører hver gang expenses oppdateres
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  return (
    <div className="app">
      <h1 className="app__title">Expense Tracker</h1>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList expenses={expenses} /> {/* burdevise utgiftene her */}
    </div>
  );
}

export default App;
