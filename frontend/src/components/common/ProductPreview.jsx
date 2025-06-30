import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../style/ProductPreview.css";

const products = [
  {
    id: "pro-1",
    title: "Hiking Backpack",
    description: "Durable 40L hiking bag with waterproof lining and chest straps.",
    category: "Hiking",
    price: 2399,
    brand: 'Wildcraft',
    sizes: ['S', 'M', 'L', 'XL'],
    gender: 'male',
    tags: ["birthday", "romantic"],
    image: "/src/assets/shop/hiking-bagpack.jpg",
    buyLink: "https://www.amazon.in/Impulse-rucksack-75-backpack-trekking/dp/B09T9XDQ99/ref=sr_1_3_sspa?sr=8-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY"
  },
  {
    id: "pro-2",
    title: "Trekking Poles",
    description: "Lightweight aluminum walking sticks for rough terrain.",
    category: "Hiking",
    price: 1299,
    brand: 'Wildcraft',
    sizes: ['S', 'M', 'L', 'XL'],
    gender: 'Unisex',
    tags: ["adventure"],
    image: "/src/assets/shop/trekking-poles.jpg",
    buyLink: "https://www.amazon.in/TheFitLife-Nordic-Walking-Trekking-Poles/dp/B01N57G27J/ref=sr_1_3?sr=8-3"
  },
  {
    id: "pro-3",
    title: "Date Night Matching Tees",
    description: "Couple cotton t-shirt set for romantic outings.",
    category: "Date",
    price: 899,
    brand: "LoveThreads",
    sizes: ['M', 'L'],
    gender: 'Unisex',
    tags: ["romantic", "birthday"],
    image: "/src/assets/shop/tees.webp",
    buyLink: "https://www.amazon.in/s?k=Date+Night+Matching+Tees"
  },
  {
    id: "pro-4",
    title: "Clubwear Neon Shirt",
    description: "Stylish glowing neon shirt perfect for club nights.",
    category: "Club",
    price: 1199,
    brand: 'Wildcraft',
    sizes: ['S', 'M', 'L', 'XL'],
    gender: 'Unisex',
    tags: ["romantic"],
    image: "/src/assets/shop/clubwear.webp",
    buyLink: "https://www.amazon.in/s?k=Clubwear+Neon+Shirt"
  },
  {
    id: "pro-5",
    title: "Couple Wooden Memory Box",
    description: "A unique gift to store memories and letters.",
    category: "Gift",
    price: 749,
    brand: 'Wildcraft',
    sizes: ['M', 'L'],
    gender: 'Unisex',
    tags: ["romantic"],
    image: "/src/assets/shop/maching-box.webp",
    buyLink: "https://www.amazon.in/dp/B093G5ZP7G"
  },
  {
    id: "pro-6",
    title: "Hangout Hammock Chair",
    description: "Cozy swing chair for relaxing vibes indoors or outdoors.",
    category: "Hangout",
    price: 1999,
    brand: "NatureTime",
    sizes: ['M', 'L'],
    gender: 'Unisex',
    tags: ["adventure", "romantic"],
    image: "/src/assets/shop/hammock-bed.jpg",
    buyLink: "https://www.amazon.in/dp/B08WZVKZ45"
  },
  {
      id: "pro-7",
      title: "Clubwear Neon Shirt",
      description: "Stylish glowing neon shirt perfect for club nights.",
      category: "Club",
      price: 1199,
      brand: "FrameArt",
      sizes: ['M', 'L'],
      gender: 'Unisex',
      tags: ["adventure", "romantic"],
      image: "/src/assets/shop/clubwear.webp",
      buyLink: "https://www.amazon.in"
    },
    {
      id: "pro-8",
      title: "Couple Wooden Memory Box",
      description: "A unique gift to store memories and letters.",
      category: "Gift",
      price: 749,
      brand: "ShadeOn",
      sizes: ['M', 'L'],
      gender: 'women',
      image: "/src/assets/shop/maching-box.webp",
      buyLink: "https://www.amazon.in"
    },
    {
      id: "pro-9",
      title: "Hangout Hammock Chair",
      description: "Cozy swing chair for relaxing vibes indoors or outdoors.",
      category: "Hangout",
      price: 1999,
      brand: 'TinyNotes',
      sizes: ['M', 'L'],
      gender: 'Unisex',
      tags: ["adventure", "romantic"],

      image: "/src/assets/shop/hammock-bed.jpg",
      buyLink: "https://www.amazon.in/dp/B08WZVKZ45"
    },
];

const ProductPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="product-section">
      <h2 className="section-title">🌟 Featured Products</h2>
      <div className="product-container">
        {products.map((product) => (
          <motion.div
            className="product-card"
            key={product.id}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: product.id * 0.1 }}
          >
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <button className="shop-now-btn" onClick={() => navigate("/shop")} > Shop Now</button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="shop-more-container">
        <button className="shop-more-btn" onClick={() => navigate("/shop")}>
          Shop More →
        </button>
      </div>
    </section>
  );
};

export default ProductPreview;
