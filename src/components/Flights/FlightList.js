import React from 'react'
import {useTranslation} from "react-i18next";
import MyFlightCard from "./MyFlightCard";

const FlightList = (props) => {
    const [t] = useTranslation()
    return (
        <div className='col-12 col-lg-12 d-flex justify-content-center my-0 py-0 my-flight-content'>
            <div className='col-12 col-lg-11 col-md-11'>
                {
                    props?.flights?.map((flight) => {
                        return (
                            <MyFlightCard flight={flight}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default FlightList