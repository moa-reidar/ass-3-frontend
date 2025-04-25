import React from 'react';

function TotalExpense({ expenses }) {
  const total = expenses.reduce((sum, expense) => {
    return sum + parseFloat(expense.amount);
  }, 0);

  return (
    <div className="total-expense">
      <h2 className="total-expense__title">Totalt brukt</h2>
      <p className="total-expense__amount">{total} kr</p>
    </div>
  );
}

export default TotalExpense;
