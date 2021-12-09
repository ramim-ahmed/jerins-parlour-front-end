import React from 'react';
import ContactUs from '../../components/ContactUs/ContactUs';
import Footer from '../../components/Footer/Footer';
import Hero from '../../components/Hero/Hero';
import Navigation from '../../components/Navigation/Navigation';
import OurServices from '../../components/OurServices/OurServices';
import Professionally from '../../components/Professionally/Professionally';
import Testimonials from '../../components/Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Hero />
            <OurServices />
            <Professionally />
            <Testimonials />
            <ContactUs />
            <Footer />
        </div>
    );
};

export default Home;