import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="section no-pad-bot" id="index-banner">
          <div className="container">
            <h1 className="header center green-text">Portfolio App</h1>
            <div className="row center">
              <h5 className="header col s12 light">
                A set of tools and visualizations to see your investments and
                the projection of your financial obligations.
              </h5>
              <div className=" col s12 light">
                <h6>
                  This project is still in development. I am working on adding:{" "}
                </h6>
                <ul>
                  <li>Account system/authentication</li>
                  <li>
                    Comprehensize portfolio consolidation dashboard with the
                    option to add assets/liabilities
                  </li>
                </ul>
              </div>
            </div>
            <div className="row center">
              <Link
                to="/compound-interest-calculator"
                id="download-button"
                className="btn-large waves-effect waves-light green"
              >
                Try Calculator
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
