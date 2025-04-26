import React from 'react';

function ExpenseItem({ title, amount, date, category, onDelete, onEdit, id }) {
  return (
    <div className="expense-item">
      <div className="expense-item__info">
        <h3 className="expense-item__title">{title}</h3>
        <p className="expense-item__category">Kategori: {category}</p>
        <p className="expense-item__date">Dato: {date}</p>
      </div>

      <div className="expense-item__amount">
        {amount} kr
      </div>

      <div className="expense-item__actions">
        <button className="expense-item__edit" onClick={() => onEdit(id)}>Rediger</button>
        <button className="expense-item__delete" onClick={() => onDelete(id)}>Slett</button>
      </div>
    </div>
  );
}

export default ExpenseItem;
