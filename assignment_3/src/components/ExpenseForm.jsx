import React, { useState } from 'react';
import '../css/style.css';

function ExpenseForm() {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    date: '',
    category: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Skjema sendt:', formData); 
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <h2 className="expense-form__title">Legg til utgift</h2>

      <div className="expense-form__group">
        <label>Tittel</label>
        <input
          type="text"
          name="title"
          onChange={handleChange}
        />
      </div>

      <div className="expense-form__group">
        <label>Beløp</label>
        <input
          type="number"
          name="amount"
          onChange={handleChange}
        />
      </div>

      <div className="expense-form__group">
        <label>Dato</label>
        <input
          type="date"
          name="date"
          onChange={handleChange}
        />
      </div>

      <div className="expense-form__group">
        <label>Kategori</label>
        <select
          name="category"
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

      <button type="submit" className="expense-form__submit">Lagre utgift</button>
    </form>
  );
}

export default ExpenseForm;
