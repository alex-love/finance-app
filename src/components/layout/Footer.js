import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="page-footer green">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">About</h5>
                <p className="grey-text text-lighten-4">
                  This website contains basic finance and personal investing
                  tools. I made it to both practice my coding skills, and
                  provide a reason on a topic that I enjoy. Check out my
                  blog/personal website{" "}
                  <a
                    rel="noopener noreferrer"
                    style={{ color: "yellow" }}
                    href="https://alex-love.github.io"
                    target="_blank"
                  >
                    here.
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              Made with{" "}
              <a
                className="green-text text-lighten-3"
                href="http://materializecss.com"
              >
                Materialize
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
