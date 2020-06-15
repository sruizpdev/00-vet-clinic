import React from 'react';
const Appointment = ({ appointment }) => {
  return (
    <div className="appointment">
      <p>
        Pet: <span>{appointment.pet}</span>
      </p>
      <p>
        Owner: <span>{appointment.owner}</span>
      </p>
      <p>
        Date: <span>{appointment.date}</span>
      </p>
      <p>
        Time: <span>{appointment.time}</span>
      </p>
      <p>
        Description: <span>{appointment.description}</span>
      </p>
    </div>
  );
};

export default Appointment;
