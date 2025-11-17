import React from 'react'
import "./Product.css";

const Product = ({ product, productClick }) => {
    return (
        <div className='item' onClick={productClick}>
            <div>
                <label className='product-name'>{product.name}</label>
                <br />
                <label>Price: ${product.price}</label>
            </div>
            <label>Stock: {product.stock}</label>
            <br />
            <label className='product-id'>ID: {product.id}</label>
        </div>
    )
}

export default Product