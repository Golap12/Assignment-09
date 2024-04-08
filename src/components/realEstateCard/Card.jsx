/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Card = ({ card }) => {
    return (
        <div className="card bg-emerald-800 text-primary-content">
            <div className="card-body">
                <h2 className="card-title">{card.segment_name}</h2>
                <p>{card.description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/details/${card.id}`}><button className="btn">View Property</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Card;