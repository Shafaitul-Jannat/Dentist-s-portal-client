import React from 'react';
import Card from './Card';

import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
const info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-1 px-12'>
            <Card bg='bg-gradient-to-r from-secondary to-primary' cardTitle='Opening Hours' img={clock}></Card>
            <Card bg='bg-accent' cardTitle='Visit Our Location' img={marker}></Card>
            <Card bg='bg-gradient-to-r from-secondary to-primary' cardTitle='Contact us Now' img={phone}></Card>
        </div >
    );
};

export default info;