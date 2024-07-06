import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);



  return (
    <nav>
  
      <a href="/" className="title">
        Alien
      </a>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <a href="">
            HOME
          </a>
        </li>
        <li>
          <a href="">
            about us
          </a>
        </li>
        <li>
          <a href="" >
            Category
          </a>
        </li>
        <li>
          <a href="">
            testimonial
          </a>
        </li>
        <li>
          <a href="">
            blog
          </a>
        </li>
        <li>
          <a href="">
            contact us
          </a>
        </li>
      </ul>
   
    </nav>
  );
};

export default Navbar;