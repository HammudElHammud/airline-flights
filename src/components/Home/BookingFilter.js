import React, {useState, useEffect} from 'react';
import {useTranslation} from "react-i18next";
import * as FlightIcons from '@mui/icons-material';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import AutoCompleteSearch from "./AutoCompleteSearch";
import {createAxios} from "../../utils/Helpars/AxiosHelpers";
import moment from "moment";
import {useHistory} from "react-router-dom";

const api = createAxios();
const BookingFilter = (props) => {
    const history = useHistory()
    const [t] = useTranslation()
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [airlines, setAirlines] = useState([]);
    const [airline, setAirline] = useState('');
    const [destinations, setDestinations] = useState([]);
    const [destination, setDestination] = useState('');
    const [isOneWay, setIsOneWay] = useState('round-trip');

    useEffect(()=>{
        retrieveAirlines()
        retrieveDestinations()
    },[])

    const retrieveAirlines = () => {
        api.get('/airlines')
            .then((response) => {
                const data = response.data
                setAirlines(data.airlines.map((d) => {
                    return {
                        id: d.nvls,
                        name: d.publicName,
                        ...d
                    }
                }))
            })
            .catch((e) => {
                console.log({error: e})
            })
    }

    const retrieveDestinations = () => {
        api.get('/destinations')
            .then((response) => {
                const data = response.data
                setDestinations(data.destinations.map((d) => {
                    return {
                        id: d.nvls,
                        name: d.publicName.english,
                        ...d
                    }
                }))
            })
            .catch((e) => {
                console.log({error: e})
            })
    }

    const gettingFlightDirection = () => {
        if (airline?.length === 0) return 'A'
        if (destination?.length === 0) return 'D'
        if (airline?.length > 0 && destination?.length > 0) return 'D'
        if (airline?.length === 0 && destination?.length > 0) return 'A'
        if (airline?.length > 0 && destination?.length === 0) return 'D'

    }


    const formatDateTime = (date) => {
        if (!date) return '';

        const pad = (number) => (number < 10 ? '0' + number : number);

        const year = date.getFullYear();
        const month = pad(date.getMonth() + 1);
        const day = pad(date.getDate());
        const hours = pad(date.getHours());
        const minutes = pad(date.getMinutes());
        const seconds = pad(date.getSeconds());

        return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
    };


    const formatTime = (date) => {
        if (!date) return '';
        return moment(date).format('HH:mm');
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        props.onClickFilter({
            scheduleDate: startDate === '' ? '' : formatTime(new Date(startDate)) ,
            fromDateTime: startDate === '' ? '' : formatDateTime(new Date(startDate)) ,
            toDateTime: endDate === '' ? '' : formatDateTime(new Date(endDate)),
            // airline, will use if we can search be the airline name
            // route: destination, will use if we can search by destination
            flightDirection: gettingFlightDirection(),
            isOneWay,
        })

    }

    const handleOnSearch = (value) => {
    }

    const handleOnSelect = (value) => {
        setAirline(value?.iata)

    }
    const handleOnSelectDestinations = (value) => {
        setDestination(value?.iata)
        console.log({handleOnSelectDestinations: value})
    }

    const onClickToReset = () => {
        setDestination('')
        setAirline('')
        setStartDate('')
        setEndDate('')
        setDestinations([])
        setAirlines([])
        history.replace('/')
    }

    return (
        <section className="col-12 booking-form">
            <div className='d-flex justify-content-between my-auto text-center'>
                <div className='d-flex'>
                    <FlightIcons.Flight className='rotate90' />
                    <h2 className='book-your-flight mx-2'> {t('Book Your Flight')}</h2>
                </div>
                <div className='d-flex justify-content-center align-items-center text-center'>
                    <div
                        className={'d-flex justify-content-center align-items-center text-center round-trip ' + (isOneWay === 'round-trip' ? ' trip-active' : ' one-way-active')}
                      onClick={()=>{
                          setIsOneWay('round-trip')
                      }}
                    >
                        <p className={'d-flex justify-content-center align-items-center text-center ' + (isOneWay === 'round-trip' ? ' round-trip-text' : ' one-way-text')}>{t('Round trip')}</p>
                    </div>
                    <div className={'one-way d-flex justify-content-center align-items-center text-center '  + (isOneWay === 'one-way' ? ' trip-active' : ' one-way-active')}
                         onClick={()=>{
                             setIsOneWay('one-way')
                         }}
                    >
                        <p className={'d-flex justify-content-center align-items-center text-center one-way-text ' + + (isOneWay === 'round-trip' ? ' round-trip-text' : ' one-way-text')}>{t('One way')}</p>
                    </div>
                </div>
            </div>

            <form
                action=""
                onSubmit={(e) => {
                    e.preventDefault()
                    handleSubmit(e)
                }}
            >
                <div className="col-md-12 col-lg-12 col-12 row my-3">
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className='d-flex col-12 '>
                            <div className='p-0 m-0 col-6 position-relative'>
                                <AutoCompleteSearch
                                    url={''}
                                    handleOnSelect={handleOnSelect}
                                    handleOnSearch={()=>{}}
                                    items={airlines}
                                />
                                <FlightIcons.FlightTakeoff className='position-absolute flight-take-off z-index-99'/>
                            </div>
                            <div className='p-0 m-0 col-6 position-relative'>
                                <AutoCompleteSearch
                                    url={''}
                                    handleOnSelect={handleOnSelectDestinations}
                                    handleOnSearch={()=>{}}
                                    items={destinations}
                                    isRight={true}
                                />
                                <FlightIcons.FlightLand className='position-absolute flight-take-off ml-2 mx-1 z-index-99'/>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 phone-m">
                        <div className='d-flex col-12'>
                            <div className='col-6 position-relative p-0 m-0'
                            style={{
                                left: '11px'
                            }}
                            >
                                <DatePicker
                                    selected={startDate}
                                    className='form-control left-filter-book filter-book-input'
                                    onChange={(date) => setStartDate(date)}
                                />
                                <FlightIcons.Event className='position-absolute flight-take-off'/>
                            </div>
                            <div className='col-6 position-relative '>
                                <DatePicker
                                    selected={endDate}
                                    className='form-control right-filter-book filter-book-input'
                                    onChange={(date) => setEndDate(date)}
                                />
                                <FlightIcons.Event className='position-absolute flight-take-off ml-2 mx-1'/>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit">{t('Show flights')}</button>
                <button type="button" className='btn btn-outline-info mx-2'
                 onClick={()=>{
                     onClickToReset()
                 }}
                >{t('Reset')}</button>
            </form>
        </section>
    );
}

export default BookingFilter;
