import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/BlogHighlights.css";

const blogPosts = [
  {
    id: 1,
    title: "Top 10 Coffee Shops You Must Visit",
    description:
      "Discover cozy and aesthetic cafes perfect for your next hangout or study session.",
    image: "/src/assets/coffee.jfif",
  },
  {
    id: 2,
    title: "Best Hiking Trails Around You",
    description:
      "Explore the nature trails and mountain treks that’ll leave you breathless (in a good way). these are the aowsome place to visits and they are the best for hkings",
    image: "/src/assets/hiking.jpg",
  },
  {
    id: 3,
    title: "Nightlife You Can’t Miss",
    description:
      "Dive into the most exciting clubs, live music bars, and dance floors near you.",
    image: "/src/assets/date.jpg",
  },
];

const BlogHighlights = () => {
 
  const navigator = useNavigate();
   

  return (
    <section className="blog-section">
      <h2 className="section-title">From Our Blog</h2>
      {blogPosts.map((blog, index) => (
        <div
          key={blog.id}
          className={`blog-card ${index % 2 === 0 ? "row" : "row-reverse"}`}
        >
          <img src={blog.image} alt={blog.title} className="blog-img" />
          <div className="blog-content">
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
            <button className="blog-btn" onClick={() => navigator("/blog")} >Read More</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default BlogHighlights;
