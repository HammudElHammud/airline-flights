import React, {useState} from 'react';
import * as FlightIcons from '@mui/icons-material';
import moment from "moment";
import {useTranslation} from "react-i18next";
import {random} from "../../utils/Helpars/NumberHelpers";
import ModalComponent from "../ModelComponent";
import flight1 from "../../assets/images/flight1.png";

const MyFlightCard = (props) => {
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
                            <div
                                className='col-12 col-lg-10 col-md-10 row justify-content-center align-items-center text-center'>
                                <div className='col-lg-3 col-md-3 col-12 phone-results-card'>
                                    <div
                                        className='col-lg-12 col-md-12 col-12 row results-card-step-content p-0 m-0'>
                                        <div className='w-100 d-flex p-0 m-0 results-card-first-left-top-div'>
                                            <FlightIcons.Luggage className='flight-take-off'/>
                                            <p className='results-card-first-left-top'>{t('1 piece X 20kg luggage')}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-3 col-12 phone-results-card'>
                                    <div
                                        className='col-lg-12 col-md-12 col-12 row results-card-step-content p-0 m-0'>
                                        <div className='w-100 d-flex p-0 m-0 results-card-first-left-top-div'>
                                            <FlightIcons.Luggage className='flight-take-off'/>
                                            <p className='results-card-first-left-top'>{t('1 piece cabin luggage (55x40x20 cm)')}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-3 col-12 phone-results-card'>
                                    <div
                                        className='col-lg-12 col-md-12 col-12 row results-card-step-content p-0 m-0'>
                                        <div className='w-100 d-flex p-0 m-0 results-card-first-left-top-div'>
                                            <FlightIcons.Fastfood className='flight-take-off'/>
                                            <p className='results-card-first-left-top'>{t('NO')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-12 col-md-12 d-flex justify-content-center align-items-center'>
                            <div
                                className='col-12 col-lg-10 col-md-10 d-flex justify-content-center align-items-center text-center'>
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

            <div
                className='col-12 col-lg-12 col-md-12 header-flight-row justify-content-between flight-card-list p-3 my-3'>
                <div className='col-lg-6'>
                    <div className='col-lg-12 col-12 d-flex justify-content-start'>
                        <div className='px-1'>
                            <img src={flight1}/>
                            {/*need to change the image here*/}
                        </div>
                        <p className='flight-list-time'>{moment(props.flight?.scheduleDateTime).format('hh:mm A')} -
                            {moment(props.flight.estimatedLandingTime).format('hh:mm A')}</p>
                    </div>
                    <div className='col-lg-12 col-12 header-flight-row justify-content-between px-2'>
                        <div className='col-12 col-md-4 col-lg-4'>
                            <p className='col-12 col-lg-12 p-0 m-0 flight-list-details-airline'>{t('Details Air Lines')}</p>
                            <p className='col-12 col-lg-12 p-0 m-0 flight-list-details-flight d-flex justify-content-start pointer-event'
                             onClick={()=>{setIsOpen(true)}}
                            >
                                {t('Details Air Lines')}
                                <i className="fa fa-angle-down edit-filter-arrow mx-1 mt-2"
                                   aria-hidden="true"></i>
                            </p>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4'>
                            <p className='col-12 col-lg-12 p-0 m-0 flight-list-details-airline'>{t('Nonstop')}</p>
                            <p className='col-12 col-lg-12 p-0 m-0 flight-list-details-flight'>{timeDifference}</p>
                        </div>
                        <div className='col-12 col-md-4 col-lg-4'>
                            <p className='col-12 col-lg-12 p-0 m-0 flight-list-details-airline'>{props.flight?.airlineCode} {t('to')} {props?.flight?.route?.destinations}</p>
                            <p className='col-12 col-lg-12 p-0 m-0 flight-list-details-flight'>DL 1443</p>
                        </div>

                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='col-lg-12 col-12 col-md-12 header-flight-row justify-content-start mt-3'>
                        <div className='col-lg-2 col-6 col-md-2'>
                            <div className='flight-list-details-price align-content-center text-center'>
                                <p className='flight-list-details-price-category'>${random(10, 300).toFixed(0)}</p>
                                <p className='flight-list-details-price-category-text'>{t('Main')}</p>
                            </div>
                        </div>
                        <div className='col-lg-2 col-6 col-md-2'>
                            <div className='flight-list-details-price align-content-center text-center'>
                                <p className='flight-list-details-price-category'>${random(300, 400).toFixed(0)}</p>
                                <p className='flight-list-details-price-category-text'>{t('Comfort+')}</p>
                            </div>
                        </div>
                        <div className='col-lg-2 col-6 col-md-2'>
                            <div className='flight-list-details-price align-content-center text-center'>
                                <p className='flight-list-details-price-category'>${random(400, 500).toFixed(0)}</p>
                                <p className='flight-list-details-price-category-text'>{t('Delta one')}</p>
                            </div>
                        </div>
                        <div className='col-lg-2 col-6 col-md-2'>
                            <div className='flight-list-details-price align-content-center text-center'>
                                <p className='flight-list-details-price-category'>${random(500, 600).toFixed(0)}</p>
                                <p className='flight-list-details-price-category-text'>{t('First one')}</p>
                            </div>
                        </div>
                        <div className='col-lg-2 col-6 col-md-2'>
                            <div className='flight-list-details-price align-content-center text-center'>
                                <p className='flight-list-details-price-category'>${random(600, 700).toFixed(0)}</p>
                                <p className='flight-list-details-price-category-text'>{t('Business')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default MyFlightCard;
