import React from "react";

const Info = (props) => {
  return (
    <div>
      {props.error && (
        <div className="alert alert-danger">
          <p>{props.error}</p>
        </div>
      )}

      {!props.error && props.temperature ? (
        <div className=" box_container row">
          {props.city && props.country && (
            <p className="col-md-12 col-sm-12 col-xl-3 col-lg-12">
              <div className="box col-md-12 col-sm-12  ">
                <i className="fas fa-location-arrow"></i> Location: {props.city}
                , {props.country}
              </div>
            </p>
          )}
          {props.temperature && (
            <p className=" col-md-12 col-sm-12 col-xl-3 col-lg-12">
              <div className="box col-md-12 col-sm-12 ">
                <i className="fas fa-temperature-low"></i> Temperature:{" "}
                {props.temperature} {props.fahrenheit ? "°F" : "°C"},{" "}
                {props.description}
              </div>
            </p>
          )}
          {props.humidity && (
            <p className=" col-md-12 col-sm-12 col-xl-3 col-lg-12 ">
              <div className="box col-md-12 col-sm-12  ">
                <i className="fas fa-water"></i> Humidity: {props.humidity}
              </div>
            </p>
          )}
          {props.wind_speed && (
            <p className=" col-md-12 col-sm-12 col-xl-3 col-lg-12">
              <div className="box box2 col-md-12 col-sm-12 ">
                <i className="fas fa-wind"></i> Wind Speed: {props.wind_speed}
              </div>
            </p>
          )}
        </div>
      ) : (
        ""
      )}

      {!props.error ? (
        <button
          onClick={props.changeScale}
          className="btn btn-warning btn-block"
        >
          change temperature scale
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Info;
