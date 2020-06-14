import React, { Fragment } from 'react';
import Form from './components/Form';

function App() {
  return (
    <Fragment>
      <h1>Simple Vet Clinic App</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form />
          </div>
          <div className="one-half column">2</div>
        </div>
      </div>
    </Fragment>
  );
}
export default App;
