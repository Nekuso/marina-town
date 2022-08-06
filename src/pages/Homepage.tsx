import React from 'react'
import Footer from '../components/Footer'
import Form from '../components/Form'
import Hero from '../components/Hero'
import Info from '../components/Info'
import Location from '../components/Location'
import Plan from '../components/Plan'
import Service from '../components/Service'
import Tour from '../components/Tour'
import Units from '../components/Units'

function Homepage() {
    return (
        <div className="homepage">
            <Hero/>
            <Info/>
            <Service/>
            <Units/>
            <Plan/>
            <Location/>
            <Tour/>
            <Form/>
            <Footer/>
        </div>
    )
}

export default Homepage