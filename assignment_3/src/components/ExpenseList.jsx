import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses, onDeleteExpense, onEditExpense }) {
  return (
    <section className="expense-list">
      <h2 className="expense-list__title">Dine utgifter</h2>

      {expenses.length === 0 ? (
        <p className="expense-list__empty">Ingen utgifter registrert ennå.</p>
      ) : (
        <ul className="expense-list__items">
          {expenses.map((expense) => (
            <li key={expense.id}>
              <ExpenseItem
                id={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                category={expense.category}
                onDelete={onDeleteExpense} 
                onEdit={onEditExpense}     
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ExpenseList;
