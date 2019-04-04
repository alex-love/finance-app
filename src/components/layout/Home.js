import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="section no-pad-bot" id="index-banner">
                    <div className="container">

                        <h1 className="header center green-text">Portfolio App</h1>
                        <div className="row center">
                            <h5 className="header col s12 light">A set of tools and visualizations to see your investments and the projection of your financial obligations.</h5>
                        </div>
                        <div className="row center">
                            <a href="/finance-app/compound-interest-calculator" id="download-button" className="btn-large waves-effect waves-light green">Try Calculator</ a>
                        </div>


                    </div>
                </div>

                <div classNameName="container">
                    <div className="section">
                        <div className="row">
                            <div className="col s12 m4">
                                <div className="icon-block">
                                    <h2 className="center light-blue-text"><i className="material-icons">flash_on</i></h2>
                                    <h5 className="center">Compound Interest Calculator</h5>

                                    <p className="light">See how compounding interest helps you over the long run.</p>
                                </div>
                            </div>

                            <div className="col s12 m4">
                                <div className="icon-block">
                                    <h2 className="center light-blue-text"><i className="material-icons">group</i></h2>
                                    <h5 className="center">User Experience Focused</h5>

                                    <p className="light">I want these tools to be as easy as possible to use. Providing visualizations for financial and investment concepts has really helped me over the years.</p>
                                </div>
                            </div>

                            <div className="col s12 m4">
                                <div className="icon-block">
                                    <h2 className="center light-blue-text"><i className="material-icons">settings</i></h2>
                                    <h5 className="center">Easy to work with</h5>

                                    <p className="light">This app uses Materialize.css, based off of Googles Material Design. The design components are clean and easy to use.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}
