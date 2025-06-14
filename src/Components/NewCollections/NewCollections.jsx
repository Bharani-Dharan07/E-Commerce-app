import React from 'react';
import './NewCollections.css'; // Assuming you have a CSS file for styling
import new_collection from '../Assets/new_collections'; // Replace with your image path
import Item from '../Item/Item';
const NewCollections = () => {
    return (
        <div className='new-collections'>
            <h1>NEW COLLECTIONS</h1> 
            <hr />
            <div className='collections'>
                {new_collection.map((item, i) => (
                    <Item
                        key={item.id}
                        image={item.image}
                        name={item.name}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                ))}
            </div>
        </div>
    );
};

export default NewCollections;