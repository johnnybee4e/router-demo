import React, { Component } from "react";
import axios from "axios";
import { CityView } from "./components";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zip: "",
      cities: []
    };
  }

  handleChange = evt => {
    let { value } = evt.target;
    this.setState({ zip: value });
  };

  handleClick = () => {
    let { zip } = this.state;
    axios
      .get(`https://ctp-zip-api.herokuapp.com/zip/${zip}`)
      .then(response => {
        console.log(response)
        let { data } = response;
        this.setState({ cities: data, zip: "" });
      })
      .catch(err => console.error(err));
  };

  render() {
    let { zip, cities } = this.state;
    console.log(zip)
    console.log(cities);
    const citiesRender = !cities.length
      ? null
      : cities.map(city => (
          <CityView
            key={city.RecordNumber}
            state={city.State}
            location={city.Location}
            population={city.EstimatedPopulation}
            wages={city.TotalWages}
          />
        ));
    return (
      <div className="App">
        <h1>Zip Search</h1>
        <br />
        <input type="text" value={zip} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Search</button>
        {citiesRender}
      </div>
    );
  }
}

export default App;
