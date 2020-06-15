import React, { Fragment, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const Form = ({ newAppointment }) => {
  const [appointment, updateAppointment] = useState({
    pet: '',
    owner: '',
    date: '',
    time: '',
    description: '',
  });
  const [error, updateError] = useState(false);

  const updateState = (e) => {
    e.preventDefault();
    updateAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  const { pet, owner, date, time, description } = appointment;

  const submitAppointment = (e) => {
    e.preventDefault();
    if (
      pet.trim() === '' ||
      owner.trim() === '' ||
      date.trim() === '' ||
      time.trim() === '' ||
      description.trim() === ''
    ) {
      updateError(true);

      return;
    }
    updateError(false);
    appointment.id = uuidv4();
    newAppointment(appointment);
    updateAppointment({
      pet: '',
      owner: '',
      date: '',
      time: '',
      description: '',
    });
  };
  return (
    <Fragment>
      <h1>New appoinment</h1>
      {error ? <p className="alert-error">An error has occurred</p> : null}
      <form onSubmit={submitAppointment}>
        <label>Pet name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Pet name"
          onChange={updateState}
          value={pet}
        />
        <label>Owner name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Owner name"
          onChange={updateState}
          value={owner}
        />
        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={updateState}
          value={date}
        />
        <label>Time</label>
        <input
          type="time"
          name="time"
          className="u-full-width"
          onChange={updateState}
          value={time}
        />
        <label>Description</label>
        <textarea
          name="description"
          className="u-full-width"
          onChange={updateState}
          value={description}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          New appoinment
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
