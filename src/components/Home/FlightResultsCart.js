import React, {useState} from 'react';
import * as FlightIcons from '@mui/icons-material';
import moment from "moment";
import {useTranslation} from "react-i18next";
import {random} from "../../utils/Helpars/NumberHelpers";
import ModalComponent from "../ModelComponent";

const FlightResultsCart = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [t] = useTranslation()

    const calculateTimeDifference = (scheduleDateTime, estimatedLandingTime) => {
        const start = moment(scheduleDateTime);
        const end = moment(estimatedLandingTime);

        const duration = moment.duration(end.diff(start));
        const hours = Math.floor(duration.asHours());
        const minutes = duration.minutes();

        return `${Math.abs(hours) }h ${Math.abs(minutes)}m`;
    };

    const flightSchedule = props.flight?.scheduleDateTime;
    const estimatedLanding = props.flight?.estimatedLandingTime;

    const timeDifference = calculateTimeDifference(flightSchedule, estimatedLanding);

    return (
        <>
            <ModalComponent
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                height={430}
            >
                <div style={{textAlign: 'left'}}>
                    <div
                        className="col-lg-12 col-md-12 col-12 d-flex justify-content-between modal-header px-0 mx-0 pt-0 w-100">
                        <h5 className="modal-title w-100 ml-3">
                            {props.flight?.flightName}
                        </h5>
                        <i
                            style={{fontSize: '20px'}}
                            onClick={() => setIsOpen(false)}
                            className="far fa-times-circle cursor-pointer mr-3"
                        />
                    </div>
                    <div className='modal-body'>
                        <div className='col-12 col-lg-12 col-md-12 d-flex justify-content-center align-items-center'>
                            <div className='col-12 col-lg-10 col-md-10 row justify-content-center align-items-center text-center'>
                                <div className='col-lg-3 col-md-3 col-12 phone-results-card'>
                                    <div
                                        className='col-lg-12 col-md-12 col-12 row results-card-step-content p-0 m-0'>
                                        <div className='w-100 d-flex p-0 m-0 results-card-first-left-top-div'>
                                            <FlightIcons.Luggage  className='flight-take-off'/>
                                            <p className='results-card-first-left-top'>{t('1 piece X 20kg luggage')}</p>
                                        </div>
                                       </div>
                                </div>
                                <div className='col-lg-3 col-md-3 col-12 phone-results-card'>
                                    <div
                                        className='col-lg-12 col-md-12 col-12 row results-card-step-content p-0 m-0'>
                                        <div className='w-100 d-flex p-0 m-0 results-card-first-left-top-div'>
                                            <FlightIcons.Luggage  className='flight-take-off'/>
                                            <p className='results-card-first-left-top'>{t('1 piece cabin luggage (55x40x20 cm)')}</p>
                                        </div>
                                       </div>
                                </div>
                                <div className='col-lg-3 col-md-3 col-12 phone-results-card'>
                                    <div
                                        className='col-lg-12 col-md-12 col-12 row results-card-step-content p-0 m-0'>
                                        <div className='w-100 d-flex p-0 m-0 results-card-first-left-top-div'>
                                            <FlightIcons.Fastfood  className='flight-take-off'/>
                                            <p className='results-card-first-left-top'>{t('NO')}</p>
                                        </div>
                                       </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-12 col-md-12 d-flex justify-content-center align-items-center'>
                            <div className='col-12 col-lg-10 col-md-10 d-flex justify-content-center align-items-center text-center'>
                                <div className='col-12 col-lg-12 row justify-content-between'>
                                    <div className='col-lg-3 col-md-3 col-12 phone-results-card'>
                                        <div
                                            className='col-lg-12 col-md-12 col-12 row results-card-step-content p-0 m-0'>
                                            <div className='w-100 d-flex p-0 m-0 results-card-first-left-top-div'>
                                                <FlightIcons.FlightTakeoff className='flight-take-off'/>
                                                <p className='results-card-first-left-top'>{t('Departure')}</p>
                                            </div>
                                            <p className='w-100 results-card-first-left-time'>{
                                                moment(props.flight?.scheduleDateTime).format('hh:mm A')
                                            } </p>
                                            <p className='w-100 results-card-first-left-airline'>{t('Airport')}:{props.flight?.airlineCode}</p>
                                            <div className='mt-4'>
                                                <p className='w-100 results-card-first-left-price'>{t('Price')}:
                                                    ${random(10, 500).toFixed(0)}</p>
                                                <p className='w-100 results-card-first-left-way'>Round Trip</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-3 col-12 phone-results-card'>
                                        <div
                                            className='w-100 d-flex p-0 m-0 d-flex justify-content-center text-center position-relative'>
                                            <div className='results-divider position-absolute'>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-3 col-md-3 col-12 phone-results-card'>
                                        <div className='col-lg-12 col-md-12 col-12 row results-card-step-content'>
                                            <div className='w-100 d-flex p-0 m-0 results-card-first-left-top-div'>
                                                <FlightIcons.FlightLand className='flight-take-off'/>
                                                <p className='results-card-first-left-top'>{t('Arrival')}</p>
                                            </div>
                                            <p className='w-100 results-card-first-left-time'>{moment(props.flight.estimatedLandingTime).format('hh:mm A')}</p>
                                            <p className='w-100 results-card-first-left-airline'>Airport:{props?.flight?.route?.destinations}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </ModalComponent>

            <div className='results-card p-3 mt-2' key={props.flight?.id}>
                <div className='col-12 col-lg-12 d-flex justify-content-start'>
                    <p className='title-of-flight'>{props.flight?.flightName}  {moment(props.flight?.scheduleDateTime).format('L')}</p>
                </div>
                <div className='col-12 col-lg-12 row justify-content-between'>
                    <div className='col-lg-2 col-md-2 col-12 phone-results-card'>
                        <div
                            className='col-lg-12 col-md-12 col-12 row results-card-step-content p-0 m-0'>
                            <div className='w-100 d-flex p-0 m-0 results-card-first-left-top-div'>
                                <FlightIcons.FlightTakeoff className='flight-take-off'/>
                                <p className='results-card-first-left-top'>{t('Departure')}</p>
                            </div>
                            <p className='w-100 results-card-first-left-time'>{moment(props.flight?.scheduleDateTime).format('hh:mm A')}</p>
                            <p className='w-100 results-card-first-left-airline'>{t('Airport')}:{props.flight?.airlineCode}</p>
                            <div className='mt-4'>
                                <p className='w-100 results-card-first-left-price'>{t('Price')}:
                                    ${random(10, 500).toFixed(0)}</p>
                                <p className='w-100 results-card-first-left-way'>{t('Round Trip')}</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-2 col-12 phone-results-card'>
                        <div
                            className='w-100 d-flex p-0 m-0 d-flex justify-content-center text-center position-relative'>
                            <div className='results-divider position-absolute'>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-2 col-12 phone-results-card'>
                        <div className='col-lg-12 col-md-12 col-12 row results-card-step-content'>
                            <div className='col-lg-12 col-md-12 col-12 p-0 m-0'>
                                <p className='results-card-first-left-top'>{t('Departure')}</p>
                            </div>
                            <div
                                className='w-100 col-md-12 col-lg-12 col-12 d-flex p-0 m-0 d-flex justify-content-center text-center my-1'>
                                <FlightIcons.FlightTwoTone className='flight-take-off rotate90'/>
                            </div>
                            <div className='w-100 col-md-12 col-lg-12 col-12 p-0 m-0'>
                                <p className='results-card-center-nonstop'>{timeDifference} (Nonstop</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-2 col-12 phone-results-card'>
                        <div
                            className='w-100 d-flex p-0 m-0 d-flex justify-content-center text-center position-relative'>
                            <div className='results-divider position-absolute'>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-2 col-12 phone-results-card'>
                        <div className='col-lg-12 col-md-12 col-12 row results-card-step-content'>
                            <div className='w-100 d-flex p-0 m-0 results-card-first-left-top-div'>
                                <FlightIcons.FlightLand className='flight-take-off'/>
                                <p className='results-card-first-left-top'>{t('Arrival')}</p>
                            </div>
                            <p className='w-100 results-card-first-left-time'>{moment(props.flight.estimatedLandingTime).format('hh:mm A')}</p>
                            <p className='w-100 results-card-first-left-airline'>Airport:{props?.flight?.route?.destinations}</p>
                            <div className='mt-4  d-flex justify-content-end position-relative'>
                                <div
                                    className='book-flight d-flex justify-content-center align-content-center text-center'
                                    onClick={()=>{
                                        props.onBooking(props.flight)
                                    }}
                                >
                                    <p className='book-flight-text d-flex justify-content-center align-content-center text-center'>{t('Book Flight')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-12 col-lg-12 d-flex justify-content-start p-0 m-0'>
                <div className='show-details-div d-flex justify-content-center align-content-center text-center'>
                    <p className='show-details-div-text'
                       onClick={() => setIsOpen(true)}
                    >
                        {t('Check the details')}
                    </p>
                </div>
            </div>

        </>

    );
}

export default FlightResultsCart;
