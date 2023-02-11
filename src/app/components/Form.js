import React from "react";

const Form = (props) => (
  <div className="card card-body">
    <form onSubmit={props.getWeather}>
      <div className="form-group">
        <input
          type="text"
          name="city"
          placeholder=" City Name"
          className="form-control"
          autoFocus
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="country"
          placeholder="Country Name"
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-success btn-block">
        Get Weather
      </button>
    </form>
  </div>
);

export default Form;
