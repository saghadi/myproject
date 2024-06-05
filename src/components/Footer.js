import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer className="main-footer">
            <div className="container">
                <div className="footer-content">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="footer-main-box">
                                <div className="footer-logo">
                                    <a href="#">
                                        <img src="assets/images/main-logo.svg" alt="" />
                                    </a>
                                </div>
                                <div className="footer-details-box">
                                    <h4>
                                        about quicksear
                                    </h4>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Praesent viverra neque viverra purus. At
                                        tincidunt erat ultrices tristique purus lorem libero amet. Nec eu dictum sit
                                        nibh. Tortor semper morbi amet fermentum.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-7">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="footer-listing">
                                        <h4>
                                            Categories
                                        </h4>
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    Sourcing
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Recipes
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    FAQ
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Sign In
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="footer-listing">
                                        <h4>
                                            location
                                        </h4>
                                        <ul className="footer-location">
                                            <li>
                                                <a href="#">
                                                    <div className="location-img">
                                                        <img src="assets/images/location-icon.svg" alt="" />
                                                    </div>
                                                    <div className="location-text">
                                                        Quicksear OpCo AAB665 New York NewStret 221, MA 02472
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="footer-listing">
                                        <h4>
                                            contact us
                                        </h4>
                                        <ul className="footer-location">
                                            <li>
                                                <a href="mailto:support@quicksear.com">
                                                    <div className="location-img">
                                                        <img src="assets/images/email-icon.svg" alt="" />
                                                    </div>
                                                    <div className="email-text">
                                                        support@quicksear.com
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="footer-copy-right">
                        <div className="copy-right-box">
                            <p>
                                © React Demo
                            </p>
                        </div>
                        <div className="footer-right-box">
                            <div className="footer-privacy-list">
                                <ul>
                                    <li>
                                        <a href="#">
                                            Terms & Conditions
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Privacy
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            Accessibility
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer