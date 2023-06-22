import React, { useState } from 'react';
import pizzas from './pizzas.json';
import PizzaResult from './PizzaResult';

function PizzaSearch() {
  const [searchText, setSearchText] = useState('');
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [selectedSize, setSelectedSize] = useState(0);

  function handleSearch(event) {
    setSearchText(event.target.value.toLowerCase());
    setSelectedPizza(null);
  }

  function handlePizzaClick(pizza) {
    setSelectedPizza(pizza);
    setSearchText(pizza.name);
    console.log(pizza.name);
  }

  function handleSizeChange(event) {
    setSelectedSize(event.target.value);
  }

  const filteredPizzas = pizzas.filter(pizza => pizza.name.toLowerCase().includes(searchText));

  return (
    <div>
      <input type="text" placeholder="Search for pizza..." value={searchText} onChange={handleSearch} id='searchbar'/>

      {selectedPizza && (
        <div>
          <h2>{selectedPizza.name}</h2>

          <select value={selectedSize} onChange={handleSizeChange}>
            <option value="0">Small</option>
            <option value="1">Medium</option>
            <option value="2">Large</option>
          </select>
        </div>
      )}

      {filteredPizzas.length === 0 ? (
        console.log('HII')
        // <p>No pizzas found</p>
      ) : (
        <ul>
          {filteredPizzas.map(pizza => (
            <li key={pizza.id} onClick={() => handlePizzaClick(pizza)}>
              {pizza.name} - {pizza.price[0]}
            </li>
          ))}
        </ul>
      )}

      {selectedPizza && (
        <PizzaResult pizza={selectedPizza} size={selectedSize} />
      )}
    </div>
  );
}

export default PizzaSearch;