import React from 'react';
import WebsiteCard from '../components/WebsiteCard.jsx';

const Project3 = () => {
    const websites = [
        {
            name: 'Websites 6',
            image: 'https://via.placeholder.com/400*200',
            link: 'https://website7.com',
        },

     {
        name: 'Website 7',
        image: 'https://via.placeholder.com/400*200',
        link: 'https://website7.com',
     },

    ];

   return (
    <div>
        <h1>Project 3</h1>
        <div className="website-list">
            {websites.map((website, index) => (
                <WebsiteCard
                key = {index}
                name = {website.name}
                link={website.link}
                image={website.image}
                />
            ))}
        </div>
    </div>
   );   
};

export default Project3;