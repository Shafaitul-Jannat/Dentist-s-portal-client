import React, { useState } from 'react';
import AppBanner from './AppBanner';
import AvailAppointment from './AvailAppointment';


const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
          <AppBanner  date={date} setDate={setDate}></AppBanner>
          <AvailAppointment date={date}> </AvailAppointment>
           
        </div>
    );
};

export default Appointment;