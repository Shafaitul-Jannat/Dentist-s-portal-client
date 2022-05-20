import React from 'react';
import Banner from '../Banner/Banner'

import Info from './info';
import Service from './Service';
import MakeAppointment from './MakeAppointment';
import Care from './Care';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from '../Shared/Footer/Footer';


const home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Service></Service>
            <Care></Care>
            <MakeAppointment></MakeAppointment>
            <Testimonials></Testimonials>
            <Contact></Contact>


        </div>
    );
};

export default home;