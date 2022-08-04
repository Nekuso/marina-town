import React from 'react'
import Hero from '../components/Hero'
import Info from '../components/Info'
import Plan from '../components/Plan'
import Service from '../components/Service'
import Units from '../components/Units'

function Homepage() {
    return (
        <div className="homepage">
            <Hero/>
            <Info/>
            <Service/>
            <Units/>
            <Plan/>
        </div>
    )
}

export default Homepage