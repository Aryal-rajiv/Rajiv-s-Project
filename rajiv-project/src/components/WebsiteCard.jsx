import React from "react";

const WebsiteCard =({name, image, link}) => {

    return(
        <div className="website-card" onClick={() => window.open(link, '_blank')}>
            <div className="website-image-container">
                <img src={image} alt={name} className = "website-image" />
            </div>
            <div className="website-content">
                <h3 className="website-name">{name}</h3>
            </div>
        </div>
    );
};

export default WebsiteCard;