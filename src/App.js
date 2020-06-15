import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {
  let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
  if (!initialAppointments) {
    initialAppointments = [];
  }

  const [appointments, updateAppointments] = useState(initialAppointments);

  useEffect(() => {
    if (initialAppointments) {
      localStorage.setItem('appointments', JSON.stringify(appointments));
    } else {
      localStorage.setItem('appointments', JSON.stringify([]));
    }
  }, [appointments, initialAppointments]);

  const newAppointment = (appointment) => {
    updateAppointments([...appointments, appointment]);
  };

  const deleteAppointment = (id) => {
    const newAppointments = appointments.filter(
      (appointment) => appointment.id !== id
    );
    updateAppointments(newAppointments);
  };
  const title =
    appointments.length === 0
      ? 'There are no appointments'
      : 'Admin your appointments';

  return (
    <Fragment>
      <h2>Simple Vet Clinic App</h2>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form newAppointment={newAppointment} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {appointments.map((appointment) => (
              <Appointment
                key={appointment.id}
                appointment={appointment}
                deleteAppointment={deleteAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default App;
