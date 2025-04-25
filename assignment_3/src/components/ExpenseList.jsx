import React from 'react';

function ExpenseList({ expenses }) {
  return (
    <section className="expense-list">
      <h2 className="expense-list__title">Dine utgifter</h2>

      {expenses.length === 0 ? (
        <p className="expense-list__empty">Ingen utgifter registrert ennå.</p>
      ) : (
        <ul className="expense-list__items">
          {expenses.map((expense) => (
            <li key={expense.id}>
              {/* Placeholder. husk at denne byttes ut med ExpenseItem senere */}
              <p>{expense.title} - {expense.amount} kr</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ExpenseList;
