import React, { useState, useEffect } from 'react';
import './css/reset.css';
import './css/variables.css';
import './css/style.css';

import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import TotalExpense from './components/TotalExpense';
import Filter from './components/Filter';

function App() {
  // Leser utgifter fra localStorage ved oppstart
  const [expenses, setExpenses] = useState(() => {
    const storedExpenses = localStorage.getItem('expenses');
    return storedExpenses ? JSON.parse(storedExpenses) : [];
  });

  // Lagrer valgte filtreringsvalg (måned og kategori)
  const [filters, setFilters] = useState({
    month: '',
    category: ''
  });

  // Funksjon som oppdaterer filtrene
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleAddExpense = (expenseData) => {
    const newExpense = {
      ...expenseData,
      id: Math.random().toString(),
    };
    setExpenses((prev) => [newExpense, ...prev]);
    console.log('Lagret utgift:', newExpense);
  };

  // Lagrer til localStorage hver gang expenses endres
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  // Filtrerer utgifter basert på måned og kategori
  const filteredExpenses = expenses.filter((expense) => {
    const expenseMonth = expense.date; 
    const matchesMonth = filters.month === '' || expenseMonth === filters.month;
    const matchesCategory = filters.category === '' || expense.category === filters.category;
    return matchesMonth & matchesCategory;
  });

  return (
    <div className="app">
      <h1 className="app__title">Expense Tracker</h1>
      
      <Filter
        selectedMonth={filters.month}
        selectedCategory={filters.category}
        onFilterChange={handleFilterChange}
      />
      
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList expenses={filteredExpenses} />
      <TotalExpense expenses={filteredExpenses} />
    </div>
  );
}

export default App;
