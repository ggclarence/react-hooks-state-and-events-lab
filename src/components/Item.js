import React, {useState} from "react";

function Item({ name, category }) {
  const [cartStatus, clickCart] = useState(false)
  function clickHandler(){
    clickCart((cartStatus)=> !cartStatus)
    console.log(cartStatus)
  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cartStatus?"in-cart":"add"} onClick={clickHandler}>{cartStatus ? "Remove From Cart ":"Add to Cart"}</button>
    </li>
  );
}

export default Item;


// In the Item component, when the user clicks the <button> element, the item should be added to their virtual cart. 
// The way we'll show the user that the item is in the cart is by changing the className on the <li> element:
// If the item is not in the cart, the <button> element's text should read "Add to Cart", and if the item is in the cart,
// the <button> element's text should read "Remove From Cart". Naturally, you'll also need to add state to the Item component to solve this deliverable!