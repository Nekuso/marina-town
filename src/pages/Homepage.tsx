import React from 'react';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Form from '../components/Form';
import Location from '../components/Location';
import Units from '../components/Units';
import Plan from '../components/Plan';
import Service from '../components/Service';
import Tour from '../components/Tour';

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
        </div>
    )
}

export default Homepage