import React from 'react'
import {useTranslation} from "react-i18next";

const Prices = (prop) => {
    const [t] = useTranslation()
    return (
        <div className='d-flex justify-content-center'>
            <div className='col-12 col-lg-11 col-md-11 d-flex justify-content-between my-2'>
                <div className='d-flex'>
                    <p className='by-recommended'>{t('Sort by Recommended')}</p>
                    <i className="fa fa-angle-down edit-filter-arrow mx-1 by-recommended-icon"
                       aria-hidden="true"></i>
                </div>
                <div className='d-flex justify-content-start'>
                    <div className='d-flex justify-content-center info-div'>
                        <i className='fa fa-info m-0 p-0 text-white info-icon'></i>
                    </div>
                    <p className='avg-fare mx-1'>{t('Avg Fare:')} $225</p>
                </div>

            </div>

        </div>
    )

}

export default Prices