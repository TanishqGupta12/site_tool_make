import React from 'react';

export default function Contact() {
    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: "5px" }}>Contact</h5>
                    <h1>Contact For Any Query</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="contact-form bg-secondary rounded p-5">
                            <div id="success"></div>
                            <form name="sentMessage" id="contactForm" noValidate>
                                <div className="control-group">
                                    <input type="text" className="form-control border-0 p-4" id="name" placeholder="Your Name" required />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <input type="email" className="form-control border-0 p-4" id="email" placeholder="Your Email" required />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <input type="text" className="form-control border-0 p-4" id="subject" placeholder="Subject" required />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="control-group">
                                    <textarea className="form-control border-0 py-3 px-4" rows="5" id="message" placeholder="Message" required></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="text-center">
                                    <button className="btn btn-primary py-3 px-5" type="submit">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}