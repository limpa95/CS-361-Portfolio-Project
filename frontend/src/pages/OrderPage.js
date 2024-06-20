import React, { useState } from 'react';
import ProductRow from '../components/ProductRow.js'; 
import products from '../data/products.js';

function OrderPage () {
    return (
        <>
        <h2>Order Form</h2>
            <article>
                <p><strong>Please fill out the form to order.</strong></p>
                        
                    <fieldset>
                        <legend>Products available</legend>
                            <table>
                                <caption>Select one product below and choose the quantity</caption>
                                <thead>
                                    <tr>
                                        <th>Company</th>
                                        <th>Product</th>
                                        <th>Current Price</th>
                                        <th>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {products.map((product, i) => 
                                    <ProductRow 
                                        products={product}
                                        key={i}
                                    />)}
                                </tbody>
                            </table>
                    </fieldset>

            </article>
        </>
    );
}
            
export default OrderPage