
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light text-center text">
      <h2 className="navbar-brand text-center mt-3" href="#">Blog Post</h2>
      <ul className="navbar-nav">
        <li className="nav-item active">
         Home
        </li>
        <li className="nav-item">
         new Blog
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;