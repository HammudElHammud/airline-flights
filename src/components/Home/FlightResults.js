import React from 'react';

import FlightResultsCart from "./FlightResultsCart";

const FlightResults = (props) => {
    return (
        <>
            {
                props?.flights?.map((flight) => {
                    return (
                        <FlightResultsCart
                            key={flight?.id}
                            onBooking={props.onBooking}
                            flight={flight}
                        />
                    )
                })
            }
        </>
    );
}

export default FlightResults;
