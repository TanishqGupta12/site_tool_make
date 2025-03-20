import React from "react";

const subjects = [
    { id: 1, img: "img/cat-1.jpg", title: "Web Design", courses: 100 },
    { id: 2, img: "img/cat-2.jpg", title: "Development", courses: 100 },
    { id: 3, img: "img/cat-3.jpg", title: "Game Design", courses: 100 },
    { id: 4, img: "img/cat-4.jpg", title: "Apps Design", courses: 100 },
    { id: 5, img: "img/cat-5.jpg", title: "Marketing", courses: 100 },
    { id: 6, img: "img/cat-6.jpg", title: "Research", courses: 100 },
    { id: 7, img: "img/cat-7.jpg", title: "Content Writing", courses: 100 },
    { id: 8, img: "img/cat-8.jpg", title: "SEO", courses: 100 },
];

export default function Category() {
    return (
        <div className="container-fluid py-5">
            <div className="container pt-5 pb-3">
                <div className="text-center mb-5">
                    <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: "5px" }}>Subjects</h5>
                    <h1>Explore Top Subjects</h1>
                </div>
                <div className="row">
                    {subjects.map((subject) => (
                        <div key={subject.id} className="col-lg-3 col-md-6 mb-4">
                            <div className="cat-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src={subject.img} alt={`Subject: ${subject.title}`} />
                                <a className="cat-overlay text-white text-decoration-none" href="#">
                                    <h4 className="text-white font-weight-medium">{subject.title}</h4>
                                    <span>{subject.courses} Courses</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
