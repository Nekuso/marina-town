import React, { useRef } from 'react';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Hero from '../components/Hero';
import Info from '../components/Info';
import Location from '../components/Location';
import Plan from '../components/Plan';
import Service from '../components/Service';
import Tour from '../components/Tour';
import Units from '../components/Units';
import useScrollSnap from 'react-use-scroll-snap';

function Homepage() {
    const scrollRef = useRef(null);
    useScrollSnap({ ref: scrollRef, duration: 400, delay: 10, });

    
    return (
        <div className="homepage" ref={scrollRef}>
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