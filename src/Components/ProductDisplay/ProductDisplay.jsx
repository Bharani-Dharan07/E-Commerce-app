import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext'; // Adjust the path if needed
import './ProductDisplay.css'; // Assuming you have a CSS file for styling
import star_icon from '../Assets/star_icon.png'; // Replace with your star icon path
import star_dull_icon from '../Assets/star_dull_icon.png'; // Replace with your dull star icon path 

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    return (
        <div className='productdisplay'>
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="productdisplay-image">
                    <img className='productdisplay-main-img' src={product.image} alt={product.name} />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>122</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">₹{product.old_price}</div>
                    <div className="productdisplay-right-price-new">₹{product.new_price}</div>
                </div>
                <div className="productdisplay-right-discription">
                    A Lightweight, breathable, and comfortable t-shirt made from 100% organic cotton. Perfect for everyday wear or casual outings.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category:</span>Women, T-Shirt, Crop Top</p>
                <p className='productdisplay-right-category'><span>tags:</span>Modern, Latest</p>
            </div>
        </div>
    );
};

export default ProductDisplay;