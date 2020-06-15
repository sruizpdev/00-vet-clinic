import React, { Fragment, useState } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {
  const [appointments, updateAppointments] = useState([]);

  const newAppointment = (appointment) => {
    updateAppointments([...appointments, appointment]);
  };

  return (
    <Fragment>
      <h2>Simple Vet Clinic App</h2>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form newAppointment={newAppointment} />
          </div>
          <div className="one-half column">
            <h2>Admin your appointment</h2>
            {appointments.map((appointment) => (
              <Appointment key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default App;
