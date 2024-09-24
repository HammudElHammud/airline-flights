import React from 'react';
import Skeleton from '@mui/material/Skeleton';


const FlightResultsCartSkeleton = (props) => {
    return (
        <>
            {
                [1,2,3,4,5,6].map((a)=>{
                    return (
                        <>
                            <div className='results-card p-3 mt-2' key={a}>
                                <div className='col-12 col-lg-12 d-flex justify-content-start'>
                                    <p className='title-of-flight'>
                                        <Skeleton animation="wave" width="10rem" height="2rem" />
                                    </p>
                                </div>
                                <div className='col-12 col-lg-12 row justify-content-between'>
                                    <div className='col-lg-2 col-md-2 col-12 phone-results-card'>
                                        <div
                                            className='col-lg-12 col-md-12 col-12 row results-card-step-content p-0 m-0'>
                                            <div className='w-100 d-flex p-0 m-0 results-card-first-left-top-div'>
                                                <Skeleton animation="wave" width="3rem" height="3rem" />
                                                <p className='results-card-first-left-top'>
                                                    <Skeleton animation="wave" width="4rem" height="2rem" /></p>
                                            </div>
                                            <p className='w-100 results-card-first-left-time'> <Skeleton animation="wave" width="8rem" height="4rem" /></p>
                                            <p className='w-100 results-card-first-left-airline'>
                                                <Skeleton animation="wave" width="7rem" height="3rem" /></p>
                                            <div className='mt-4'>
                                                <p className='w-100 results-card-first-left-price'>
                                                    <Skeleton animation="wave" width="4rem" height="2rem" />
                                                </p>
                                                <p className='w-100 results-card-first-left-way'>
                                                    <Skeleton animation="wave" width="5rem" height="2rem" />
                                                </p>
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
                                                <p className='results-card-first-left-top'><Skeleton animation="wave" width="9rem" height="2rem" /></p>
                                            </div>
                                            <div
                                                className='w-100 col-md-12 col-lg-12 col-12 d-flex p-0 m-0 d-flex justify-content-center text-center my-1'>
                                                <Skeleton animation="wave" width="9rem" height="2rem" />
                                            </div>
                                            <div className='w-100 col-md-12 col-lg-12 col-12 p-0 m-0'>
                                                <p className='results-card-center-nonstop'><Skeleton animation="wave" width="3rem" height="4rem" /></p>
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
                                                <Skeleton animation="wave" width="4rem" height="2rem" />
                                            </div>
                                            <p className='w-100 results-card-first-left-time'><Skeleton animation="wave" width="3rem" height="2rem" /></p>
                                            <p className='w-100 results-card-first-left-airline'><Skeleton animation="wave" width="3rem" height="2rem" /></p>
                                            <div className='mt-4  d-flex justify-content-end position-relative'>
                                                <div
                                                    className='book-flight-loading d-flex justify-content-center align-content-center text-center'
                                                >
                                                    <Skeleton animation="wave" width="9rem" height="7rem" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-12 col-lg-12 d-flex justify-content-start p-0 m-0'>
                                <div className='show-details-div d-flex justify-content-center align-content-center text-center'>
                                    <p className='show-details-div-text'
                                    >
                                        <Skeleton animation="wave" width="5rem" height="2rem" />
                                    </p>
                                </div>
                            </div>
                        </>
                    )
                })
            }

        </>

    );
}

export default FlightResultsCartSkeleton;
