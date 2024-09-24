import React from 'react';
import {useTranslation} from "react-i18next";
import * as FlightIcons from '@mui/icons-material';
import Deals from '../../assets/images/Deals.png'
import Discover from '../../assets/images/Discover.png'
import {useDispatch, useSelector} from "react-redux";
import {toggleLanguage} from "../../reducers/App.reducer";

const Header = () => {
    const app = useSelector(state => state.App)
    const dispatch = useDispatch()

    const {t} = useTranslation();

    return (
        <div className="col-lg-12 col-md-12 col-12 d-flex justify-content-between">
            <div className="logo d-flex justify-content-center align-items-center text-center">
                <div className='logo-div'>
                    <FlightIcons.LocalAirportTwoTone className='rotate90 text-white mx-1 logo-div-icon'/>
                </div>
                <p className='top-logo-text text-center mx-auto my-auto logo-text'>
                    {t('PLANE SCAPE')}
                </p>
            </div>
            <div className="user-options">
                <div className='p-0 m-0 d-flex justify-content-center align-items-center text-center'
                     onClick={() => dispatch(toggleLanguage())}
                >
                    <FlightIcons.GTranslateTwoTone className='flight-take-off top-items'/>
                    <a href="#" className='top-header-item'>{app.lang.code === 'en' ? 'TR' : 'En'}</a>
                </div>
                <div className='p-0 m-0 d-flex justify-content-center align-items-center text-center hide-phone'>
                    <FlightIcons.LocalOfferSharp className='flight-take-off top-items'/>
                    <a href="#" className='top-header-item'>{t('Deals')}</a>
                </div>
                <div className='p-0 m-0 d-flex justify-content-center align-items-center text-center hide-phone'>
                    <FlightIcons.Language className='flight-take-off top-items'/>
                    <a href="#" className='top-header-item'>{t('Discover')}</a>
                </div>
                <div className="user-profile pointer-event">
                    <FlightIcons.AccountCircle className=' flight-take-off top-items user-profile'/>
                    <span className='top-user-name ml-2 hide-phone'>Joane Smith</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
