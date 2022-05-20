import React from 'react';
import treatment from '../../assets/images/treatment.png'
import Button from '../Shared/Button';

const Care = () => {
    return (
        <div className='grid grid-cols-1  lg:grid-cols-2  px-36 mt-24  items-center'>
            < div className='w-50 md:w-40 lg:w-80' >
                <img src={treatment} alt="" />
            </div >
            <div className=' mt-16'>
                <h2 className='text-3xl text-slate-600 text-left font-bold '>Exceptional Dental <br /> Care, on Your Terms</h2>
                <br />

                <p className='
                text-left'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                </p>
                <div className='py-8 '>
                    <Button className=''>Get Started</Button>
                </div>
            </div>

        </div >
    );
};

export default Care;