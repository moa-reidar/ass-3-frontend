import React, { useState, useEffect } from 'react';
import '../css/style.css';

function ExpenseForm({ onAddExpense, editExpense }) {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    date: '',
    category: '',
  });

  const [error, setError] = useState('');

  // Når editExpense endres, fyll inn skjemaet automatisk
  useEffect(() => {
    if (editExpense) {
      setFormData({
        title: editExpense.title,
        amount: editExpense.amount,
        date: editExpense.date,
        category: editExpense.category,
      });
    }
  }, [editExpense]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.amount || !formData.date || !formData.category) {
      setError('Alle felt må fylles ut');
      return;
    }

    setError('');

    onAddExpense(formData);

    setFormData({
      title: '',
      amount: '',
      date: '',
      category: '',
    });
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <h2 className="expense-form__title">
        {editExpense ? 'Rediger utgift' : 'Legg til utgift'}
      </h2>

      {error && <p className="expense-form__error">{error}</p>}

      <div className="expense-form__group">
        <label htmlFor="title">Tittel</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      <div className="expense-form__group">
        <label htmlFor="amount">Beløp</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
        />
      </div>

      <div className="expense-form__group">
        <label htmlFor="date">Dato</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>

      <div className="expense-form__group">
        <label htmlFor="category">Kategori</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Velg kategori</option>
          <option value="housing">Bolig</option>
          <option value="utilities">Strøm/Vann</option>
          <option value="grocery">Mat</option>
          <option value="transportation">Transport</option>
          <option value="clothing">Klær</option>
          <option value="entertainment">Underholdning</option>
          <option value="other">Annet</option>
        </select>
      </div>

      <button type="submit" className="expense-form__submit">
        {editExpense ? 'Oppdater utgift' : 'Lagre utgift'}
      </button>
    </form>
  );
}

export default ExpenseForm;
