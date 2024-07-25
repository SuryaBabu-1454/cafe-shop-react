import React, { useState } from 'react';
import FilterCoffee from '../Image/Filter Coffee - U will Love It___.jpeg';
import InstantCoffee from '../Image/instant Coffee.jpg';
import ColdCoffee from '../Image/Cold tea.jpeg';
import MedrasFilterCoffee from '../Image/Best Filter Coffee At Home.jpeg';
import Turmeric from '../Image/Turmeric.jpeg';
import Ayurvedic from '../Image/AAyurvedic.jpeg';
import Spiced from '../Image/Spiced tea.jpeg';
import Chikmangalur from '../Image/Chick.jpeg';

import CheeseCake from '../Image/Cheescake.jpeg';
import Brownie from '../Image/Brownies.jpeg';
import Tiramisu from '../Image/Tiramisu.jpeg';
import Macrons from '../Image/Macrons.jpeg';
import Cupcakes from '../Image/Cupcake.jpeg';
import Croissants from '../Image/croissant.jpeg';
import Affogato from '../Image/Affogato.jpeg';
import Cookies from '../Image/Mix Cookies.jpeg';

import Aloo from '../Image/Toast and Sandwich/Aloo Sandwich.jpeg';
import Avocado from '../Image/Toast and Sandwich/Avocado Toast.jpeg';
import bombay from '../Image/Toast and Sandwich/BombaySand.jpeg';
import ChickenTikka from '../Image/Toast and Sandwich/ChickenTikka.jpeg';
import EggCheese from '../Image/Toast and Sandwich/EggCheese.jpeg';
import PannerTikka from '../Image/Toast and Sandwich/PannerTikka.jpeg';
import Shakshuka from '../Image/Toast and Sandwich/Shakshuka.jpeg';
import VegSand from '../Image/Toast and Sandwich/VegSand.jpeg';

import '../index.css';
import '../Pages/Menu.css';

const MenuList = () => {
  const [selectedMenu, setSelectedMenu] = useState('coffee'); // Default to 'coffee' menu

  const coffeeItems = [
    { id: 1, images: FilterCoffee, name: "Filter Coffee (Kaapi)", Price: " ₹20 per cup", Description: "Traditional South Indian coffee, often served in a stainless steel tumbler and dabarah set." },
    { id: 2, images: InstantCoffee, name: "Indian Instant Coffee", Price: " ₹15 per cup", Description: "Convenient and widely available in many cafes and homes" },
    { id: 3, images: ColdCoffee, name: "Cold Coffee", Price: "₹60 per glass", Description: "Blended with milk, sugar, and ice, often topped with ice cream or whipped cream." },
    { id: 4, images: MedrasFilterCoffee, name: "Madras Filter Coffee", Price: "₹30 per cup", Description: "Stronger and more aromatic, served in a traditional filter coffee style." },
    { id: 5, images: Turmeric, name: "Turmeric Coffee", Price: "₹80 per cup", Description: "Coffee infused with turmeric and sometimes other spices for added health benefits." },
    { id: 6, images: Ayurvedic, name: "Ayurvedic Coffee", Price: " ₹100 per cup", Description: "Blended with Ayurvedic herbs and spices like ashwagandha and brahmi." },
    { id: 7, images: Spiced, name: "Spiced Coffee", Price: "₹70 per cup", Description: "Brewed with Indian spices such as cardamom, cinnamon, and cloves for a warm, aromatic flavor." },
    { id: 8, images: Chikmangalur, name: "Chikmagalur Coffee", Price: "₹60 per cup", Description: "Single-origin Arabica beans from the Chikmagalur region, known for their distinct flavor profile." },
  ];

  const desserts = [
    { id: 1, images: CheeseCake, name: "Cheesecake", Price: "₹200 per slice", Description: "A rich and creamy dessert with a graham cracker crust, often topped with fruit compote or chocolate." },
    { id: 2, images: Brownie, name: "Brownies", Price: "₹100 per piece", Description: "Dense, fudgy chocolate dessert, sometimes with added nuts or chocolate chunks." },
    { id: 3, images: Tiramisu, name: "Tiramisu", Price: "₹250 per serving", Description: "An Italian dessert made with layers of coffee-soaked ladyfingers, mascarpone cheese, and cocoa powder." },
    { id: 4, images: Macrons, name: "Macarons", Price: "₹50 per piece", Description: "Delicate French cookies with a crisp shell and soft filling, available in various flavors." },
    { id: 5, images: Cupcakes, name: "Cupcakes", Price: "₹80 per piece", Description: "Small cakes topped with frosting and decorations, available in flavors like vanilla, chocolate, red velvet, and more." },
    { id: 6, images: Croissants, name: "Croissants", Price: "₹80 per piece", Description: "Moist, sweet baked goods available in flavors like blueberry, chocolate chip, banana nut, and more." },
    { id: 7, images: Affogato, name: "Affogato", Price: "₹100 per piece", Description: "Includes a variety of baked goods like croissants, Danish pastries, and éclairs, often filled with cream, fruit, or chocolate." },
    { id: 8, images: Cookies, name: "Cookies", Price: "₹50 per piece", Description: "Soft or crunchy baked treats available in flavors like chocolate chip, oatmeal raisin, and peanut butter." },
  ];

  const toastsandwiches = [
    { id: 1, images: Aloo, name: "Aloo Masala Sandwich", Price: "₹60", Description: "A comforting sandwich filled with spiced mashed potatoes mixed with peas, onions, and various Indian spices." },
    { id: 2, images: Avocado, name: "Avocado Toast", Price: "₹150", Description: "Toasted bread spread with mashed avocado, seasoned with salt and pepper, and garnished with herbs" },
    { id: 3, images: bombay, name: "Bombay Sandwich", Price: "₹60", Description: "A popular street food sandwich consisting of buttered bread filled with thinly sliced" },
    { id: 4, images: ChickenTikka, name: "Chicken Tikka Sandwich", Price: "₹150", Description: "This sandwich features succulent pieces of chicken marinated in spices perfection." },
    { id: 5, images: EggCheese, name: "Egg and Cheese Toast", Price: "₹100", Description: "Toasted bread topped with a fried or scrambled egg and melted cheese, often garnished with herbs and black pepper." },
    { id: 6, images: PannerTikka, name: "Panner Tikka Sandwich", Price: "₹100", Description: "A vegetarian delight featuring grilled marinated paneer cubes mixed with onions, bell peppers, and tomatoes." },
    { id: 7, images: Shakshuka, name: "Shakshuka Toast", Price: "₹120", Description: "Toasted bread served with a portion of shakshuka, garnished with fresh coriander or parsley." },
    { id: 8, images: VegSand, name: "Vegetable Club Sandwich", Price: "₹80", Description: "A triple-layered sandwich with a variety of fresh mixed vegetables." },
  ];

  const renderMenuItems = (items) => {
    return items.map((item, index) => (
      <div className="col-lg-3 col-md-6 col-sm-6 mt-2 mb-3" key={index}>
        <div className="card MenuCard">
          <img className="card-img-end" src={item.images} alt="Card cap" style={{ width: "100%", height: "200px" }} />
          <div className="card-body mb-0 pb-0">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.Description}</p>
          </div>
          <div className="card-body d-flex justify-content-between align-items-center">
            <div><b>{item.Price}</b></div>
            <div className="btn btn-sm btn-outline-dark">Buy Now</div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col-12 d-flex justify-content-center align-items-center gap-2">
            <button className=" ButtonStyle" onClick={() => setSelectedMenu('coffee')}>Coffee</button>
            <button className=" ButtonStyle" onClick={() => setSelectedMenu('dessert')}>Desserts</button>
            <button className=" ButtonStyle" onClick={() => setSelectedMenu('toast')}>Toast and Sandwiches</button>
          </div>
        </div>
        
        <div className="row mt-4">
          {selectedMenu === 'coffee' && renderMenuItems(coffeeItems)}
          {selectedMenu === 'dessert' && renderMenuItems(desserts)}
          {selectedMenu === 'toast' && renderMenuItems(toastsandwiches)}
        </div>
      </div>
    </>
  );
};

export default MenuList;
