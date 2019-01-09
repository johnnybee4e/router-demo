import React from "react";

const CityView = props => (
  <div>
    <h2>Location</h2>
    <p>State: {props.state}</p>
    <p>Location: {props.location}</p>
    <p>Population: {props.population}</p>
    <p>Total Wages: {props.wages}</p>
  </div>
);

export default CityView;
