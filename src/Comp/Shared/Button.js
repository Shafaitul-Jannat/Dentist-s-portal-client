import React from 'react';

const Button = ({ children }) => {
    return (
        <button className="btn btn-primary uppercase text-white bg-gradient-to-r from-secondary to-primary justify-items-start" > {children}
        </button >
    );
};

export default
    Button;