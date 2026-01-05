
import Services from "../section/service";
import Tour from "../section/tour";
import Packet from "../section/packet";
import Hero from "../section/home";
import CarRental from "../section/car";
import Honeymoon from "../section/honeymoon";
import Testimonial from "../section/testimonial";
import FAQSection from "../section/faq";
import Footer from "../section/Footer";


export default function page() {
    return (
        <>
        <Hero />
        <Services />
            <Tour />
            <Packet />
            <Honeymoon />
            <CarRental />
            <Testimonial />
            <FAQSection />
            <Footer />
        </>
    )
}