import React from 'react';
import ServiceCard from './ServiceCard';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';

const Service = () => {
    return (
        <div className='mt-16 '>
            <h2 className='text-secondary font-bold'>OUR SERVICES</h2>
            <h2 className='text-3xl  '>Services We Provide</h2>
            < div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-40 px-12 my-6 ' >
                <ServiceCard cardTitle='Flouoride Treatment' img={fluoride}></ServiceCard>
                <ServiceCard cardTitle='Cavity Filling' img={cavity}></ServiceCard >
                <ServiceCard cardTitle='Teeth Whitening' img={whitening}></ ServiceCard>
            </div >
        </div >
    );
};

export default Service;