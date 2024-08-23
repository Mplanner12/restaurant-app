import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/menu-items/")
      .then((response) => response.json())
      .then((data) => setMenuItems(data));
  }, []);

  return (
    <div className="menu-container">
      <h1 className="menu-title">Our Delicious Menu</h1>
      <div className="menu-grid">
        {menuItems.map((dish) => (
          <MenuItem key={dish.id} dish={dish} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
