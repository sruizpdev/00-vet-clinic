import React, { Fragment } from 'react';
const Form = () => {
  return (
    <Fragment>
      <h1>New appoinment</h1>
      <form>
        <label>Pet name</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Pet name"
        />
        <label>Owner name</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Owner name"
        />
        <label>Date</label>
        <input type="date" name="date" className="u-full-width" />
        <label>Time</label>
        <input type="time" name="time" className="u-full-width" />
        <label>Description</label>
        <textarea name="description" className="u-full-width"></textarea>
        <button type="submit" className="u-full-width button-primary">
          New appoinment
        </button>
      </form>
    </Fragment>
  );
};

export default Form;
