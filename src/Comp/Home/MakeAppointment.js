import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import Button from '../Shared/Button';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`

        }}
            className='flex justify-center items-center mt-32'>
            <div className='flex-1 hidden lg:block '>
                <img className='mt-[-140px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-5'>
                <h3 className='text-xl text-secondary font-bold text-left '>Appointment</h3>
                <h2 className='text-3xl text-white py-5 text-left'>Make an Appointment Today</h2>
                <p className='text-white pb-5 text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente earum ab cupiditate autem accusantium expedita sequi, temporibus, aut illo doloribus quaerat explicabo, assumenda consectetur est vel ad sed maiores doloremque consequatur. Amet consequuntur quibusdam autem, quod maxime qui itaque quaerat.</p>
                <Button  >Get Started</Button>
            </div>
        </section >
    );
};

export default MakeAppointment;