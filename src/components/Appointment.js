import React from 'react';
const Appointment = ({ appointment, deleteAppointment }) => {
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
      <button
        className="button delete u-full-width"
        onClick={() => deleteAppointment(appointment.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Appointment;
