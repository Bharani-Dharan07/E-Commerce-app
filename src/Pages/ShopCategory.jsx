import React from 'react';
import './CSS/ShopCategory.css';
import all_product from '../Components/Assets/all_product';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item'; // Capital I

const ShopCategory = (props) => {
    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {(all_product || []).map((item, i) => {
                    if (props.category === item.category) {
                        return (
                            <Item
                                key={item.id}
                                id={item.id} // <-- THIS IS IMPORTANT
                                image={item.image}
                                name={item.name}
                                new_price={item.new_price}
                                old_price={item.old_price}
                            />
                        );
                    }
                    return null;
                })}
            </div>
            <div className="shopsategory-loadmore">
                EXPLORE MORE 
            </div>
        </div>
    );
};

export default ShopCategory;