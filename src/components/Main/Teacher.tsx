import React from "react";

const teachers = [
    { id: 1, img: "img/team-1.jpg", name: "John Doe", role: "Web Designer" },
    { id: 2, img: "img/team-2.jpg", name: "Jane Smith", role: "UI/UX Designer" },
    { id: 3, img: "img/team-3.jpg", name: "Alice Brown", role: "Software Engineer" },
    { id: 4, img: "img/team-4.jpg", name: "David Wilson", role: "Full Stack Developer" },
];

export default function Teacher() {
    return (
        <div className="container-fluid py-5">
            <div className="container pt-5 pb-3">
                <div className="text-center mb-5">
                    <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: "5px" }}>Teachers</h5>
                    <h1>Meet Our Teachers</h1>
                </div>
                <div className="row">
                    {teachers.map((teacher) => (
                        <div key={teacher.id} className="col-md-6 col-lg-3 text-center team mb-4">
                            <div className="team-item rounded overflow-hidden mb-2">
                                <div className="team-img position-relative">
                                    <img className="img-fluid" src={teacher.img} alt={`Teacher ${teacher.name}`} />
                                    <div className="team-social">
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-outline-light btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <div className="bg-secondary p-4">
                                    <h5>{teacher.name}</h5>
                                    <p className="m-0">{teacher.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
