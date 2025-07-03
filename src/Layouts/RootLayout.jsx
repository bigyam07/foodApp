import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/navbar/navigation'
import Footer from '../components/Footer/Footer'
const RootLayout = () => {
    return (
        <>
            <div className="container">
                <Navigation />
                <Outlet />
            </div>
                <Footer/>
        </>
    )
}

export default RootLayout