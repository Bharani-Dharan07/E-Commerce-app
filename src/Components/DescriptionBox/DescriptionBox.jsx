import React from 'react';
import './DescriptionBox.css'; // Assuming you have a CSS file for styling

const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>An e-commerce website is an online platform where buyers and sellers can interact and conduct transactions for goods and services. It typically includes features such as product listings, shopping carts, payment gateways, and user accounts. E-commerce websites can vary in size and complexity, ranging from small online stores to large marketplaces that host multiple vendors. They often provide a user-friendly interface for browsing products, reading reviews, and making purchases securely.
                   E-commerce websites can also include features like order tracking, customer support, and promotional offers to enhance the shopping experience. They play a crucial role in modern retail by allowing businesses to reach a global audience and enabling consumers to shop conveniently from anywhere with an internet connection.</p>
                <p>In addition to traditional retail products, e-commerce websites can also offer digital goods, such as software, e-books, and online courses. They may support various payment methods, including credit cards, digital wallets, and bank transfers, to accommodate different customer preferences. Security measures, such as SSL encryption and secure payment gateways, are essential to protect sensitive customer information during transactions.</p>
                <p>Overall, e-commerce websites have revolutionized the way people shop, providing convenience, variety, and accessibility to consumers while offering businesses a platform to expand their reach and grow their sales.</p>
            </div>
        </div>
    );
};

export default DescriptionBox;