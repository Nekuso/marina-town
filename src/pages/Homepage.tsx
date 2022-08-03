import React from 'react'
import Hero from '../components/Hero'
import Info from '../components/Info'
import Service from '../components/Service'
import Units from '../components/Units'

function Homepage() {
    return (
        <div className="homepage">
            <Hero/>
            <Info/>
            <Service/>
            <Units/>
        </div>
    )
}

export default Homepage