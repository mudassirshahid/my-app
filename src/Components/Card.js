import React from 'react';

function Card(props) {
    return (
        <div className="card d-flex mt-5 p-5 bg-info">
            <h2>{props.h2}</h2>
            <h3>{props.h3}</h3>
        </div>
    );
};

export default Card;