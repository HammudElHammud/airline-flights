import React from 'react'
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import {useTranslation} from "react-i18next";

const Header = (prop) => {
    const [t] = useTranslation()
    return (
        <div className="col-lg-12 col-md-12 col-12 d-flex justify-content-center header-flight px-6 m-0">
            <div className='col-12 col-lg-11 col-md-11 header-flight-row justify-content-between'>
                <div className="col-12 col-lg-6 col-md-6 header-flight-row justify-content-center align-items-center text-center">
                    <button type="button" className="col-2 btn btn-light button">{t('Times')}</button>
                    <button type="button" className="col-2 btn btn-light button">{t('Stops')}</button>
                    <button type="button" className="col-2 btn btn-light button">{t('Airlines')}</button>
                    <button type="button" className="col-2 btn btn-light button">{t('Airports')}</button>
                    <button type="button" className="col-2 btn btn-light button">{t('Amenities')}</button>
                    <div className='col-3 d-flex justify-content-start mx-1'>
                        <p className="edit-filter-text  mx-0">{t('Edit Search')}</p>
                        <i className="fa fa-angle-down edit-filter-arrow mx-1" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="col-12 col-lg-6 col-md-6 header-flight-row justify-content-center align-items-center text-center">
                    <div className="col-2 col-md-2 col-lg-2 star-div">
                        <div className='p-0 m-0'>
                            <StarIcon className='active-star-icon'/>
                            <StarIcon className='active-star-icon'/>
                            <StarBorderIcon className='active-star-icon'/>
                        </div>
                        <div className='p-0 m-0'>
                            <StarBorderIcon className='active-star-icon'/>
                            <StarBorderIcon className='active-star-icon'/>
                            <StarBorderIcon className='active-star-icon'/>
                        </div>

                    </div>
                    <div className="col-2 col-md-2 col-lg-2 star-div">
                        <div className='p-0 m-0'>
                            <StarIcon className='active-star-icon'/>
                            <StarIcon className='active-star-icon'/>
                            <StarIcon className='active-star-icon'/>
                        </div>
                        <div className='p-0 m-0'>
                            <StarBorderIcon className='active-star-icon'/>
                            <StarBorderIcon className='active-star-icon'/>
                            <StarBorderIcon className='active-star-icon'/>
                        </div>

                    </div>
                    <div className="col-2 col-md-2 col-lg-2 star-div">
                        <div className='p-0 m-0'>
                            <StarIcon className='active-star-icon'/>
                            <StarIcon className='active-star-icon'/>
                            <StarIcon className='active-star-icon'/>
                        </div>
                        <div className='p-0 m-0'>
                            <StarIcon className='active-star-icon'/>
                            <StarBorderIcon className='active-star-icon'/>
                            <StarBorderIcon className='active-star-icon'/>
                        </div>

                    </div>
                    <div className="col-2 col-md-2 col-lg-2 star-div">
                        <div className='p-0 m-0'>
                            <StarIcon className='active-star-icon'/>
                            <StarIcon className='active-star-icon'/>
                            <StarIcon className='active-star-icon'/>
                        </div>
                        <div className='p-0 m-0'>
                            <StarIcon className='active-star-icon'/>
                            <StarIcon className='active-star-icon'/>
                            <StarBorderIcon className='active-star-icon'/>
                        </div>
                    </div>
                    <div className="col-2 col-md-2 col-lg-2 pointer-event">
                        <div className='p-0 m-0'>
                            <StarIcon className='active-star-icon'/>
                            <StarIcon className='active-star-icon'/>
                            <StarIcon className='active-star-icon'/>
                        </div>
                        <div className='p-0 m-0'>
                            <StarIcon className='active-star-icon'/>
                            <StarIcon className='active-star-icon'/>
                            <StarIcon className='active-star-icon'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Header