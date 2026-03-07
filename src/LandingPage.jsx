import Header from "./component/Header/Header"
import Hero from "./component/Hero/Hero"
import Logos from "./component/Logos"
import Service from "./component/Services/Service"
import Project from "./component/Project/Project"
import Testimonials from "./component/Testimonials/Testimonials"
import Footer from "./component/Footer/Footer"
import Contact from "./component/Contact/Contact"
function LandingPage() {
    return (
        <>
            <Header />
            <Hero />
            <Logos />
            <Service />
            <Project />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}

export default LandingPage