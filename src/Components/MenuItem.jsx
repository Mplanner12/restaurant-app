import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MenuItem = ({ dish }) => {
  const [Hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    rest: {
      scale: 1,
    },
  };

  const contentVariants = {
    hover: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    rest: {
      opacity: 0.8,
    },
  };

  return (
    <motion.div
      className="menu-item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      variants={imageVariants}
      animate={Hovered ? "hover" : "rest"}
    >
      <motion.div className="image-container">
        <motion.img
          src={dish.image}
          alt={dish.name}
          variants={imageVariants}
          animate={Hovered ? "hover" : "rest"}
          style={{ width: "350px", height: "200px", objectFit: "cover" }}
        />
        <motion.div
          className="price-tag"
          variants={contentVariants}
          animate={Hovered ? "hover" : "rest"}
        >
          <p>Price: ${dish.price}</p>
        </motion.div>
      </motion.div>
      <motion.div
        className="menu-item-content"
        variants={contentVariants}
        animate={Hovered ? "hover" : "rest"}
      >
        <h3>{dish.name}</h3>
        <p>{dish.description}</p>
      </motion.div>
    </motion.div>
  );
};

export default MenuItem;
