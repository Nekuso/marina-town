import React from 'react'
import Hero from '../components/Hero'
import Info from '../components/Info'
import Service from '../components/Service'

function Homepage() {
    return (
        <div className="homepage">
            <Hero/>
            <Info/>
            <Service/>
        </div>
    )
}

export default Homepage