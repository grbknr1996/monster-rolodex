import './search-box.styles.css';
import React from 'react';
export const SearchBox=({placeholder,handleChange})=>(
    <input type='search' 
    placeholder= {placeholder}
    onChange={handleChange}/>
)