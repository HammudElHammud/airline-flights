import React , {useState, useEffect} from 'react'
import {useTranslation} from "react-i18next";
import Header from "../../components/Flights/Header";
import Prices from "../../components/Flights/Prices";
import FlightList from "../../components/Flights/FlightList";
import {createAxios} from "../../utils/Helpars/AxiosHelpers";

const api = createAxios()


const Flights = () => {
    const [t] = useTranslation()
    const [flights, setFlights] = useState([])

    useEffect(()=>{
        gettingMyFlights()
    }, [])

    const gettingMyFlights = () => {
        api.get('/my-flights')
            .then((response) => {
                const data = response.data;
                console.log({data:data})
                setFlights(data);
            })
            .catch((e) => {
                console.error({ error: e });
            });
    }

    return (
        <div className="container p-0 m-0">
            <Header/>
            <div className='p-3'>
                <Prices/>
                <FlightList flights={flights}/>
            </div>
        </div>
    )

}

export default Flights