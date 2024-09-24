import React from 'react';

const FlightCard = ({ from, to, departureTime, duration, arrivalTime, airport, price }) => {
    return (
        <div className="flight-card">
            <div className="flight-info">
                <div className="flight-route">
                    <span className="flight-city">{from}</span>
                    <span className="flight-arrow">→</span>
                    <span className="flight-city">{to}</span>
                </div>
                <div className="flight-time">
                    <span className="departure-time">{departureTime}</span>
                    <span className="duration">{duration}</span>
                    <span className="arrival-time">{arrivalTime}</span>
                </div>
                <div className="flight-airport">
                    <span>Airport: {airport}</span>
                </div>
                <div className="flight-price">
                    <span>Price: {price}</span>
                </div>
            </div>
            <button className="book-flight">Book Flight</button>
            <a href="src/components/Home/FlightCard#" className="details-link">Check the details</a>
        </div>
    );
}

export default FlightCard;
