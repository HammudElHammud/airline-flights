import React from 'react'
import Header from "../../components/Home/Header";
import BookingSectionWrapper from "../../components/Home/BookingSectionWrapper";
import Sidebar from "../../components/Home/Sidebar";

const Home = () => {

    return (
        <div className="p-1 m-1 container">
            <Header/>
            <div className='col-12 col-lg-12 col-md-12 row content'>
                <BookingSectionWrapper/>
                <Sidebar />
            </div>
        </div>
    )

}

export default Home