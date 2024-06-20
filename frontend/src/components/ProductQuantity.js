import React, { useState } from 'react';
import { FiArrowUpCircle, FiArrowDownCircle } from "react-icons/fi";

function ProductQuantity() {
    const [quantity, setQuantity] = useState(0);
    const increment = () => setQuantity(quantity + 1);
    const decrement = () => setQuantity(quantity - 1);


    return (
            <div className = "reactIcons">
                <FiArrowDownCircle onClick={decrement} />
                <span id ="reactQuantity">{quantity}</span>
                <FiArrowUpCircle onClick={increment} />
            </div>
    );
}

export default ProductQuantity;