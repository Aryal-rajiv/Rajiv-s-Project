import React from 'react';
import WebsiteCard from '../components/WebsiteCard';

const Project1 = () => {
        const websites = [

        {
            name: 'Accountability Lens Asia',
            image: '../Assets/ALA.png', 
            link: 'https://accountabilitylens.org/',

        },

        {
            name:'Website 2',
            image: 'https://via.placeholder.com//400*200', 
            link: 'https://website1.com',
        },
        {
            name:'Website 2',
            image: 'https://via.placeholder.com//400*200', 
            link: 'https://website1.com',
        },
        {
            name:'Website 2',
            image: 'https://via.placeholder.com//400*200', 
            link: 'https://website1.com',
        },

    ];

    return(
        <div>
            <h1>Project 1</h1>
            <div className = "website-list">
                {websites.map((website, index) => (
                    <WebsiteCard
                    key={index}
                    name={website.name}
                    image={website.image}
                    link={website.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default Project1;