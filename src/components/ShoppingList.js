import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setState ] = useState('All')

  function handleChanges(event){
    setState(event.target.value)
    console.log(event.target.value)
  }

  const filteredItems = items.filter(item => selectedCategory === "All" ? "true" : (item.category === selectedCategory))
  
 
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChanges} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
