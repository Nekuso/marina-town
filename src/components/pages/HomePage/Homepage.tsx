import Form from "./HomePageComponents/Form"
import Hero from "./HomePageComponents/Hero"
import Info from "./HomePageComponents/Info"
import Plan from "./HomePageComponents/Plan"
import Service from "./HomePageComponents/Service"
import Tour from "./HomePageComponents/Tour"
import Units from "./HomePageComponents/Units"
import Location from "./HomePageComponents/Location"

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