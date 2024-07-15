import React from "react";

const Menu = () => {

  // Your menu items go here
  const menuItems = [
    { id: 1, name: "Coffee", price: 9.99 },
    { id: 2, name: "Salad", price: 11.99 },
    { id: 3, name: "Pasta", price: 14.99 },
    { id: 4, name: "Pizza", price: 18.99 },
    { id: 5, name: "Dessert", price: 8.99 },
  ];
  return (
    <>

    <h1>Menu page</h1>
    { menuItems.map((item,index)=>{
      return(
        <div class="card" key={index} >
        <img class="card-img-top" src="..." alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{item.name}</h5>
          <p class="card-text">card's content.</p>
        </div>
        <div class="card-body">
          <a href="#" class="card-link">
            Card link
          </a>
          <a href="#" class="card-link">
            Another link
          </a>
        </div>
      </div>
      )
          
        })}

    </>
  );
};

export default Menu;
