import React from 'react';
import WebsiteCard from '../components/WebsiteCard.jsx';

const Project2 = () => {
    const websites = [
        {
            name: 'Website 4',
            image: 'https://via.placeholder.com/400*200',
            link: 'https://website4.com',
        },

        {
            name: 'Website 5',
            image: 'https://via.placeholder.com/400*200',
            link: 'https://website4.com',
        },

        {
            name: 'Website 6',
            image: 'https://via.placeholder.com/400*200',
            link: 'https://website4.com',
        },
    ];

   return (
    <div>
        <h1>Project 2</h1>
        <div className="website-list">
            {websites.map((website, index) => (
                <WebsiteCard
                key = {index}
                name = {website.name}
                link={website.link}
                />
            ))}
        </div>
    </div>
   );
};

export default Project2;
