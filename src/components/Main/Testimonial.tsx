import React from "react";
// import OwlCarousel from "react-owl-carousel"; // Install using: npm install react-owl-carousel

const testimonials = [
    { id: 1, img: "img/testimonial-1.jpg", name: "Client Name", profession: "Profession", text: "Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam." },
    { id: 2, img: "img/testimonial-2.jpg", name: "Client Name", profession: "Profession", text: "Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam." },
    { id: 3, img: "img/testimonial-3.jpg", name: "Client Name", profession: "Profession", text: "Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum elitr dolore et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam." },
];

export default function Testimonial() {
    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: "5px" }}>Testimonial</h5>
                    <h1>What Say Our Students</h1>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        {/* <OwlCarousel className="owl-theme" loop margin={10} nav> */}
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="text-center">
                                    <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                                    <h4 className="font-weight-normal mb-4">{testimonial.text}</h4>
                                    <img className="img-fluid mx-auto mb-3" src={testimonial.img} alt={`Testimonial from ${testimonial.name}`} />
                                    <h5 className="m-0">{testimonial.name}</h5>
                                    <span>{testimonial.profession}</span>
                                </div>
                            ))}
                        {/* </OwlCarousel> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
