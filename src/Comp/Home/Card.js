import React from 'react';


const Card = ({ img, cardTitle, bg }) => {
    return (
        <div className=''>
            <div class={`card lg:card-side bg-base-100 shadow-xl ${bg}`} >
                <figure className='p-5'>
                    <img src={img} alt="Album" />
                </figure>
                <div class="card-body text-white">
                    <h2 class="card-title">{cardTitle}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div >
        </div >
    );
};

export default Card;