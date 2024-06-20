import React, { useState } from 'react';
import ProductQuantity from './ProductQuantity';    



function ProductRow({products}) {

    return(
        <tr>
            <td>
               {products.company} 
            </td>
            <td>
                {products.product}
            </td>
            <td>
                {products.price.toLocaleString('en-US',{style: 'currency',currency: 'USD', minimumFractionDigits: 2})}
            </td>
            <td>
                <ProductQuantity/>
            </td>
        </tr>
    );
}

export default ProductRow