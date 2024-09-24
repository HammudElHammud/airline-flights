import React from 'react';
import tripsnewcard from '../../assets/images/tripsnewcard.png'
import hotel from '../../assets/images/hotel.png'
import rentCard from '../../assets/images/rentcard.png'
import travels from '../../assets/images/travels.png'
import travelPackages from '../../assets/images/travelPackages.png'
import {useTranslation} from "react-i18next";

const Sidebar = () => {
    const [t] = useTranslation()
    return (
        <div className="col-lg-3 col-md-3 col-12 mt-3">
            <div className='p-0 m-0 col-12 col-lg-12 col-md-12'>
                <a href="src/components/Home/Sidebar#" className="col-12 col-md-12 col-lg-12 card">
                    <img
                        src={tripsnewcard}
                        alt="trips" className="card__img"/>
                    <span className="card__footer">
                        <i className="fa-solid fa-car-rear w-100 text-white"></i>
                     <span className='car-rent-text'>{t('CAR RENTALS')}</span>
               </span>
                </a>
            </div>
            <div className='p-0 m-0 col-12 col-lg-12 col-md-12 my-4'>
                <a href="src/components/Home/Sidebar#" className="col-12 col-md-12 col-lg-12 card">
                    <img
                        src={hotel}
                        alt="trips" className="card__img"/>
                    <span className="card__footer">
                        {/*<img className='car-rent-image' src={rentCard}/>*/}
                        <i className='fas fa-hotel col-12 w-100 text-white'></i>
                     <span className='car-rent-text'>{t('Hotels')}</span>
               </span>
                </a>
            </div>
            <div className='p-0 m-0 col-12 col-lg-12 col-md-12 my-4'>
                <a href="src/components/Home/Sidebar#" className="col-12 col-md-12 col-lg-12 card">
                    <img
                        src={travels}
                        alt="trips" className="card__img"/>
                    <span className="card__footer">
                        <img src={travelPackages} className='car-rent-image'/>
                     <span className='car-rent-text'>{t('Travels Package')}</span>
               </span>
                </a>
            </div>

        </div>
    );
}

export default Sidebar;
