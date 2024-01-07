import React, { useState } from "react";
import css from './search.module.css'

export const Search = ({onSubmit}) => {
    const [query, setQuery] = useState('')
  

    const handleChange = (e) => {
      setQuery(e.target.value.toLowerCase());
      console.log(query)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    
  };
    
    return (
        <form className={css.form} onSubmit={handleSubmit}>
    
    <input
      className={css.input}
      type="text"
      autoComplete="off"
      name="searchQuery"
      autoFocus
      placeholder="Search films"
      value={query}
      onChange={handleChange}
                />
    <button type="submit" className={css.button}>
      <span className={css.search}>Search</span>
    </button>

  </form>
    )
    
}