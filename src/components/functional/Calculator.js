import React, { Component } from "react";

import { Line } from "react-chartjs-2";

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: ["1", "2", "3"],
        datasets: [
          {
            label: "My First dataset",
            /* fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)", */
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [0]
          }
        ]
      },
      startingAmount: 0,
      interestRate: 0,
      years: 0,
      finalAmount: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.calculateInterest = this.calculateInterest.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const name = event.target.name;

    this.setState({ [event.target.name]: event.target.value });
    console.log(
      ` ir: ${this.state.interestRate} years:${
        this.state.years
      } startingAmount:${this.state.startingAmount}`
    );
    let tmp = this.state.data;
    let newData = tmp.datasets[0].data;
    newData = this.calculateInterest(
      Number(this.state.startingAmount),
      Number(this.state.years),
      Number(this.state.interestRate)
    );
    this.setState({ finalAmount: newData });
    this.setState({ data: newData });
    this.updateLabel(this.state.years);
    console.log("button pressed");
  }
  //basically just need to copy data object and add my new array to it...
  //create copy of data from state
  //update labels array with correct labels based on number of years
  //set state with new copy of data
  updateLabel(years) {
    let tmp = this.state.data; //create copy of data
    let newArray = [];
    for (let i = 1; i < years + 1; i++) {
      newArray.push(i);
    }
    tmp.labels = newArray;
    this.setState({ data: tmp });
  }

  //A = P (1 + r/n)^(nt) -> assumes yearly compounding for now
  calculateInterest(principal, years, ir) {
    var yearlyValue = [];
    ir = 1 + ir / 100;
    yearlyValue[0] = principal;
    console.log(
      `Inputs: principal: ${typeof principal} years: ${years} interest rate: ${ir}`
    );
    for (let i = 1; i < years + 1; i++) {
      let value = yearlyValue[i - 1]; //P_sub_i-1
      console.log(`Value: ${value}`);
      let yearlyTotal = value * ir;
      yearlyValue.push(yearlyTotal);
    }
    console.log(yearlyValue);
    return yearlyValue;
  }

  render() {
    const { data } = this.state.data.datasets[0];
    const { years, finalAmount } = this.state;
    return (
      <div>
        <Line data={this.state.data} width={400} height={200} />
        <div className="col m8 s8">
          <form onSubmit={this.handleChange}>
            <p className="range-field">
              Interest Rate: {this.state.interestRate} %
              <input
                type="range"
                name="interestRate"
                min="0"
                max="100"
                value={this.state.interestRate}
                onChange={this.handleChange}
              />
            </p>
            <p className="range-field">
              Starting Amount:
              <input
                type="number"
                name="startingAmount"
                min="0"
                value={this.state.startingAmount}
                onChange={this.handleChange}
              />
            </p>
            <p className="range-field">
              Years:
              <input
                type="number"
                name="years"
                min="0"
                value={this.state.years}
                onChange={this.handleChange}
              />
            </p>
            <button type="submit" name="submit" className="waves-effect btn">
              Submit
            </button>
          </form>
          <h4>Results:</h4>
          <p>
            After {years} years, with a principal investment of $
            {Number(this.state.startingAmount).toFixed(2)}, you will have $
            {Number(finalAmount[finalAmount.length - 1]).toFixed(2)}
          </p>
        </div>
      </div>
    );
  }
}
var data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fillColor: "rgba(220,220,220,0.2)",
      strokeColor: "rgba(220,220,220,1)",
      pointColor: "rgba(220,220,220,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(220,220,220,1)",
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: "My Second dataset",
      fillColor: "rgba(151,187,205,0.2)",
      strokeColor: "rgba(151,187,205,1)",
      pointColor: "rgba(151,187,205,1)",
      pointStrokeColor: "#fff",
      pointHighlightFill: "#fff",
      pointHighlightStroke: "rgba(151,187,205,1)",
      data: [28, 48, 40, 19, 86, 27, 90]
    }
  ]
};

export default class Calculator extends Component {
  render() {
    return (
      <div className="section no-pad-bot" id="index-banner">
        <div className="container">
          <div className="section">
            <div className="row">
              <div className="col s12 m12">
                <Graph data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
