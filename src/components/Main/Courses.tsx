import React from "react";

const courses = [
    { id: 1, img: "img/course-1.jpg", title: "Web Design & Development", students: 25, duration: "1h 30m", rating: 4.5, reviews: 250, price: 99 },
    { id: 2, img: "img/course-2.jpg", title: "Advanced JavaScript & React", students: 30, duration: "2h 15m", rating: 4.7, reviews: 180, price: 120 },
    { id: 3, img: "img/course-3.jpg", title: "Python for Beginners", students: 40, duration: "3h 00m", rating: 4.8, reviews: 300, price: 89 },
    { id: 4, img: "img/course-4.jpg", title: "Data Science & AI", students: 50, duration: "5h 45m", rating: 4.9, reviews: 500, price: 150 },
    { id: 5, img: "img/course-5.jpg", title: "UI/UX Design Basics", students: 20, duration: "2h 00m", rating: 4.6, reviews: 200, price: 79 },
    { id: 6, img: "img/course-6.jpg", title: "Cyber Security Essentials", students: 35, duration: "3h 30m", rating: 4.7, reviews: 220, price: 110 },
];

export default function Courses() {
    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="text-center mb-5">
                    <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: "5px" }}>Courses</h5>
                    <h1>Our Popular Courses</h1>
                </div>
                <div className="row">
                    {courses.map((course) => (
                        <div key={course.id} className="col-lg-4 col-md-6 mb-4">
                            <div className="rounded overflow-hidden mb-2">
                                <img className="img-fluid" src={course.img} alt={`Course: ${course.title}`} />
                                <div className="bg-secondary p-4">
                                    <div className="d-flex justify-content-between mb-3">
                                        <small className="m-0">
                                            <i className="fa fa-users text-primary mr-2"></i>{course.students} Students
                                        </small>
                                        <small className="m-0">
                                            <i className="far fa-clock text-primary mr-2"></i>{course.duration}
                                        </small>
                                    </div>
                                    <a className="h5" href="#">{course.title}</a>
                                    <div className="border-top mt-4 pt-4">
                                        <div className="d-flex justify-content-between">
                                            <h6 className="m-0">
                                                <i className="fa fa-star text-primary mr-2"></i>{course.rating} <small>({course.reviews})</small>
                                            </h6>
                                            <h5 className="m-0">${course.price}</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
