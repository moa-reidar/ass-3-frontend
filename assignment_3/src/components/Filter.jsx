import React from 'react';

function Filter({ selectedMonth, selectedCategory, onFilterChange }) {
  const handleMonthChange = (e) => {
    onFilterChange({ month: e.target.value, category: selectedCategory });
  };

  const handleCategoryChange = (e) => {
    onFilterChange({ month: selectedMonth, category: e.target.value });
  };

  return (
    <div className="filter">
      <div className="filter__group">
        <label htmlFor="month">Filtrer etter måned</label>
        <select id="month" value={selectedMonth} onChange={handleMonthChange}>
          <option value="">Alle måneder</option>
          <option value="01">Januar</option>
          <option value="02">Februar</option>
          <option value="03">Mars</option>
          <option value="04">April</option>
          <option value="05">Mai</option>
          <option value="06">Juni</option>
          <option value="07">Juli</option>
          <option value="08">August</option>
          <option value="09">September</option>
          <option value="10">Oktober</option>
          <option value="11">November</option>
          <option value="12">Desember</option>
        </select>
      </div>

      <div className="filter__group">
        <label htmlFor="category">Filtrer etter kategori</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">Alle kategorier</option>
          <option value="housing">Bolig</option>
          <option value="utilities">Strøm/Vann</option>
          <option value="grocery">Mat</option>
          <option value="transportation">Transport</option>
          <option value="clothing">Klær</option>
          <option value="entertainment">Underholdning</option>
          <option value="other">Annet</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
