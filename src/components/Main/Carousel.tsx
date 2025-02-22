"use client";
import { useState } from "react";
import Image from "next/image"; // If using Next.js, otherwise use <img>

const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        {
            image: "/img/carousel-1.jpg",
            title: "Best Education From Your Home",
            subtitle: "Best Online Courses",
        },
        {
            image: "/img/carousel-2.jpg",
            title: "Best Online Learning Platform",
            subtitle: "Best Online Courses",
        },
        {
            image: "/img/carousel-3.jpg",
            title: "New Way To Learn From Home",
            subtitle: "Best Online Courses",
        },
    ];

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="container-fluid p-0 pb-5 mb-5">
            <div id="header-carousel" className="carousel slide carousel-fade">
                <ol className="carousel-indicators">
                    {slides.map((_, index) => (
                        <li
                            key={index}
                            className={index === activeIndex ? "active" : ""}
                            onClick={() => setActiveIndex(index)}
                        />
                    ))}
                </ol>
                <div className="carousel-inner">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
                            style={{ minHeight: "300px" }}
                        >
                            <Image
                                src={slide.image}
                                alt="Carousel Image"
                                layout="fill"
                                objectFit="cover"
                                className="position-relative w-100"
                            />
                            <div className="carousel-caption d-flex align-items-center justify-content-center">
                                <div className="p-5 text-center" style={{ width: "100%", maxWidth: "900px" }}>
                                    <h5 className="text-white text-uppercase mb-3">{slide.subtitle}</h5>
                                    <h1 className="display-3 text-white mb-4">{slide.title}</h1>
                                    <a href="#" className="btn btn-primary py-2 px-4 font-weight-semi-bold mt-2">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Carousel Controls */}
                <button className="carousel-control-prev" type="button" onClick={handlePrev}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" onClick={handleNext}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
