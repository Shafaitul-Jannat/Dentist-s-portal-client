import React from 'react';
import bg from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';
import Button from '../Shared/Button';


const Banner = () => {
    return (
        <div className="hero min-h-screen px-12">
            <div>
                <img src={bg} className='h-full w-full bg-cover bg-center ' alt='' />

            </div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl " alt='' />
                <div>
                    <h1 className="text-5xl font-bold text-left text-gray-600">Your New Smile Starts Here</h1>
                    <p className="py-6 px-15 text-left break-normal">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    <Button>Get Started</Button>
                </div>
            </div>
        </div >
    );
};

export default Banner;