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

  // Holder styr på hvilken utgift som redigeres
  const [editExpense, setEditExpense] = useState(null);

  // Funksjon som oppdaterer filtrene
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  // Funksjon for å legge til en ny utgift eller oppdatere en eksisterende
  const handleAddExpense = (expenseData) => {
    if (editExpense) {
      setExpenses((prevExpenses) =>
        prevExpenses.map((expense) =>
          expense.id === editExpense.id ? { ...expenseData, id: expense.id } : expense
        )
      );
      setEditExpense(null); 
    } else {
      const newExpense = {
        ...expenseData,
        id: Math.random().toString(),
      };
      setExpenses((prev) => [newExpense, ...prev]);
      console.log('Lagret utgift:', newExpense);
    }
  };

  // Funksjon for å slette en utgift
  const handleDeleteExpense = (expenseId) => {
    const confirmDelete = window.confirm('Er du sikker på at du vil slette denne utgiften?');
    if (confirmDelete) {
      setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== expenseId));
    }
  };
  

  // Funksjon for å velge en utgift til redigering
  const handleEditExpense = (expenseId) => {
    const expenseToEdit = expenses.find((expense) => expense.id === expenseId);
    if (expenseToEdit) {
      setEditExpense(expenseToEdit);
    }
  };

  // Lagrer til localStorage hver gang expenses endres
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  // Filtrerer utgifter basert på måned og kategori
  const filteredExpenses = expenses.filter((expense) => {
    const expenseMonth = expense.date.slice(5, 7); 
    const matchesMonth = filters.month === '' || expenseMonth === filters.month;
    const matchesCategory = filters.category === '' || expense.category === filters.category;
    return matchesMonth && matchesCategory;
  });

  return (
    <div className="app">
      <h1 className="app__title">Expense Tracker</h1>
      
      <Filter
        selectedMonth={filters.month}
        selectedCategory={filters.category}
        onFilterChange={handleFilterChange}
      />
      
      
      <ExpenseForm onAddExpense={handleAddExpense} editExpense={editExpense} />
      
      <ExpenseList 
        expenses={filteredExpenses}
        onDeleteExpense={handleDeleteExpense}
        onEditExpense={handleEditExpense}
      />
      <TotalExpense expenses={filteredExpenses} />
    </div>
  );
}

export default App;
