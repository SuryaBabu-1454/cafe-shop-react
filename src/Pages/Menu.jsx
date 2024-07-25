import React from "react";


import './Menu.css';
import '../index.css';
import MenuList from "../Component/MenuList";
import Footer from "./Footer";



const Menu = () => {

  // const coffeeItems = [
  //   { id: 1, images:"", name: "Filter Coffee (Kaapi)",Price:" ₹20 per cup", Description:"Traditional South Indian coffee, often served in a stainless steel tumbler and dabarah set." },
  //   { id: 2, name: "Indian Instant Coffee", Price:" ₹15 per cup",Description:"Convenient and widely available in many cafes and homes" },
  //   { id: 3, name: "Cold Coffee", Price: "₹60 per glass", Description:"Blended with milk, sugar, and ice, often topped with ice cream or whipped cream." },
  //   { id: 4, name: "Madras Filter Coffee", Price: "₹30 per cup", Description:"Stronger and more aromatic, served in a traditional filter coffee style."},
  //   { id: 5, name: "Turmeric Coffee", Price: "₹80 per cup",Description:"Coffee infused with turmeric and sometimes other spices for added health benefits."},
  //   { id: 6, name: "Ayurvedic Coffee",Price:" ₹100 per cup",Description:"Blended with Ayurvedic herbs and spices like ashwagandha and brahmi."},
  //   { id: 7, name: "Spiced Coffee", Price: "₹70 per cup",Description:"Brewed with Indian spices such as cardamom, cinnamon, and cloves for a warm, aromatic flavor."},
  //   { id: 8, name: "Chikmagalur Coffee", Price: "₹60 per cup",Description:"Single-origin Arabica beans from the Chikmagalur region, known for their distinct flavor profile."},
   
    
  // ];
  // const desserts = [
  //   {
  //     id: 1,
  //     name: "Cheesecake",
  //     Price: "₹200 per slice",
  //    Description:" A rich and creamy dessert with a graham cracker crust, often topped with fruit compote or chocolate."
  //   },
  //   {
  //     id: 2,
  //     name: "Brownies",
  //     Price: "₹100 per piece",
  //     Description: "Dense, fudgy chocolate dessert, sometimes with added nuts or chocolate chunks."
  //   },
  //   {
  //     id: 3,
  //     name: "Tiramisu:",
  //    Price:"₹250 per serving",
  //     Description: "An Italian dessert made with layers of coffee-soaked ladyfingers, mascarpone cheese, and cocoa powder."
  //   },
  //   {
  //     id: 4,
  //     name: "Macarons:",
  //     Price:"₹50 per piece",
  //     Description:" Delicate French cookies with a crisp shell and soft filling, available in various flavors."
  //   },
  //   {
  //     id:5,
  //     name:"Cupcakes",
  //     Price: "₹80 per piece",
  //     Description: "Small cakes topped with frosting and decorations, available in flavors like vanilla, chocolate, red velvet, and more."
  //   },
  //   {
  //     id:6,
  //     name:"Muffins",
  //     Price: "₹80 per piece",
  //     Description: "Moist, sweet baked goods available in flavors like blueberry, chocolate chip, banana nut, and more."
  //   },
  //   {
  //     id:7,
  //     name:"Pastries",
  //     Price: "₹100 per piece",
  //     Description: "Includes a variety of baked goods like croissants, Danish pastries, and éclairs, often filled with cream, fruit, or chocolate."
  //   },
  //   {
  //     id:8,
  //     name:"Cookies",
  //    Price:"₹50 per piece",
  //     Description:" Soft or crunchy baked treats available in flavors like chocolate chip, oatmeal raisin, and peanut butter."
  //   },

  // ];

  return (
<>
    <section className="sectionHead d-flex justify-content-center flex-column align-items-center ">
    <h1>Our Menu</h1>    
    <p>We're big believers in the power of a good meal and a friendly place to eat it. </p>
        <p>Stop by for fresh, locally sourced food, served with a warm smile.</p>

  </section>
   
   <MenuList />
   <Footer/>
 
   
   

  
    
    </>

  )
};

export default Menu;
