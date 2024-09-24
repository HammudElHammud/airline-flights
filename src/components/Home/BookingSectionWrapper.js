import React, {useState,useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';

import {useHistory} from 'react-router-dom';
import {getPath, isSolidValue, overrideQueries} from "../../utils/Helpars/URLHelper";

import BookingFilter from "./BookingFilter";
import FlightResults from "./FlightResults";
import {createAxios} from "../../utils/Helpars/AxiosHelpers";
import ResultsFilter from "./ResultsFilter";
import {useTranslation} from "react-i18next";
import FlightResultsCartSkeleton from "./FlightResultsCartSkeleton";
import queryString from "query-string";
import EmptyState from "../EmptyState";

const api = createAxios();
const BookingSectionWrapper = (props) => {
    const [t] = useTranslation()
    const history = useHistory()
    const [flights, setFlights] = useState([])
    const [myFlights, setMyFlights] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')
    const [filter, setFilter] = useState({
        scheduleDate: '',
        airline: '',
        fromDateTime: '',
        toDateTime: '',
        route: ''
    })


    const [resultFilter, setResultFilter] = useState({
        sort: '',
        arriveTime: '',
        stops: ''
    });

    const getFilterParams = () => {
        const params = new URLSearchParams(window.location.search);
        const filters = { ...filter };

        filters.scheduleDate = isSolidValue(params.get('scheduleDate'))
            ? params.get('scheduleDate')
            : filters.scheduleDate;

        filters.airline = isSolidValue(params.get('airline'))
            ? params.get('airline')
            : filters.airline;

        filters.fromDateTime = isSolidValue(params.get('fromDateTime'))
            ? params.get('fromDateTime')
            : filters.fromDateTime;

        filters.toDateTime = isSolidValue(params.get('toDateTime'))
            ? params.get('toDateTime')
            : filters.toDateTime;

        return filters;
    };


    const onClickFilter = (value) => {
        setFilter((prevFilter) => {
            const newFilter = { ...prevFilter, ...value };
            history.replace('' + overrideQueries(newFilter, true));
            gettingFlights(newFilter, resultFilter);
            return newFilter;
        });
    };

    const isFlightInThePast = (scheduleDateTime) => {
        const now = new Date();
        const flightTime = new Date(scheduleDateTime);

        return flightTime < now;
    };


    const onBooking = (flight) => {
        if (isFlightInThePast(flight?.scheduleDateTime)) {
            console.error('Cannot book a flight scheduled in the past.');
            bookingError(t('Cannot book a flight scheduled in the past.'))
            return;
        }
        const isAlreadyBooked = myFlights.some(myFlight => myFlight.id === flight.id);

        if (isAlreadyBooked) {
            bookingError(t('This flight is already booked.'))
            return;
        }
        api.post('/flight', flight)
            .then((response) => {
                const data = response.data;
                console.log({data: data})
                bookingSuccess();
            })
            .catch((e) => {
                console.error({ error: e });
            });

    };

    const bookingSuccess = () => {
        toast(
            <div>
                {t('Successfully Booked, Check your flights ')} <a href="/flights">{t('Here')}</a>.
            </div>, {
                type: 'success',
                autoClose: 3000
            }
        );
    };

    const bookingError = (value) => {
        toast(
            <div>
                {value}
            </div>, {
                type: 'error',
                autoClose: 3000
            }
        );
    };

    const showError = (value) => {
        toast(
            <div>
                {value} or {t('The date-time interval is not valid. Allowed days between the from and to date-time is 3')}.
            </div>, {
                type: 'error',
                autoClose: 3000
            }
        );
    };

    useEffect(() => {
        const initialFilter = getFilterParams();
        setFilter(initialFilter);
        gettingFlights(initialFilter, resultFilter);
        gettingMyFlights()
    }, []);

    const gettingMyFlights = () => {
        api.get('/my-flights')
            .then((response) => {
                const data = response.data;
                console.log({data:data})
                setMyFlights(data);
            })
            .catch((e) => {
                console.error({ error: e });
            });
    }

    const onChangeResultFilter = (value) => {
        setResultFilter((prevResultFilter) => {
            const newResultFilter = { ...prevResultFilter, ...value };
            history.replace(getPath() + overrideQueries(newResultFilter));
            gettingFlights(filter, newResultFilter);
            return newResultFilter;
        });
    };

    const gettingFlights = (filterParams, resultFilterParams) => {
        setIsLoading(true);
        console.log({ filter: filterParams });

        const queryParams = {
            ...filterParams,
            ...resultFilterParams,
        };

        const queryStringParams = queryString.stringify(queryParams);

        api.get('/flights?' + queryStringParams)
            .then((response) => {
                const data = response.data;
                setFlights(data?.flights);
                setTimeout(() => {
                    setIsLoading(false);
                }, 200);
            })
            .catch((e) => {
                console.error({ error: e });
                let errorMessage = 'An error occurred';

                if (e.response) {
                    // The request was made and the server responded with a status code
                    errorMessage = `API Error: ${e.response.status} ${e.response.data.message || e.response.data}`;
                } else if (e.request) {
                    // The request was made but no response was received
                    errorMessage = 'No response from API';
                } else {
                    // Something happened in setting up the request
                    errorMessage = `Request setup error: ${e.message}`;
                }
                showError(errorMessage)
                setError(errorMessage);

                setIsLoading(false);
            });
    };

    return (
        <>
            <div className='col-lg-9 col-md-9 col-12 row'>
                <ToastContainer/>
                <div className='p-2 m-2 '>
                    <BookingFilter onClickFilter={onClickFilter} />
                    <div className='row col-12 col-lg-12 p-0 m-0 mt-2 p-0 m-0 '>
                        <div className='col-lg-8 col-8 p-0 m-0 ml-1 content-of-flight'>
                            {
                                isLoading ? <FlightResultsCartSkeleton/> :
                                    flights?.length === 0 || flights == undefined ? <EmptyState/> :
                                    <FlightResults
                                    flights={flights}
                                    onBooking={onBooking}
                                />
                            }
                        </div>
                        <div className='col-lg-4 col-4 p-0 m-0'>
                            <ResultsFilter
                                resultFilter={resultFilter}
                                onClick={onChangeResultFilter}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default BookingSectionWrapper