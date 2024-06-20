import React from 'react';

import { TiDelete, } from 'react-icons/ti';
import { FaEdit } from "react-icons/fa";
import { IoMdImage } from "react-icons/io";

function Card({ onImg, card, onEdit, onDelete }) {
    
    return (
        <tr>
            <td><IoMdImage onClick={() => onImg(card._id)}  /></td>
            <td>{card.cardName}</td>
            <td>{card.type}</td>
            <td>{card.date.slice(0,10)}</td>
            <td>{card.typing}</td>
            <td>{card.attribute}</td>
            <td>{card.level}</td>
            <td>{card.atk}</td>
            <td>{card.def}</td>
            <td><TiDelete onClick={() => {if (window.confirm("Are you sure you want to delete?")) {onDelete(card._id)}} }  /></td>
            <td><FaEdit onClick={() => onEdit(card)} /></td> 
        </tr>
    );
}

export default Card;