import React from 'react';
import { Link } from 'react-router-dom';

import { AiFillHome } from "react-icons/ai";
import { MdMenuBook } from "react-icons/md";
import { GiCardPlay } from "react-icons/gi";
import { GrGallery } from "react-icons/gr";
import { TiShoppingCart } from "react-icons/ti";

// Change the function names and links
// to fit your portfolio topic.


function Navigation() {
  return (
    <nav>
        <Link to="/" className = "reactSvg"><AiFillHome/> Home</Link>
        <Link to="/topicspage" className = "reactSvg"><MdMenuBook/> Topics</Link>
        <Link to="/deckpage" className = "reactSvg"><GiCardPlay/> Deck</Link>
        <Link to="/gallerypage" className = "reactSvg"><GrGallery/> Gallery</Link>
        <Link to="/orderpage" className = "reactSvg"><TiShoppingCart/> Order</Link>
    </nav>
  );
}

export default Navigation;
