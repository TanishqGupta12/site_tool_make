import React from "react";
import Navbar_v1 from "@/compoments/navbar/Navbar_v1";
import Footer_v1 from "@/compoments/footer/Footer_v1";

const teachers = [
  { id: 1, name: "John Doe", role: "Web Designer", image: "img/team-1.jpg" },
  { id: 2, name: "Jane Smith", role: "Graphic Designer", image: "img/team-2.jpg" },
  { id: 3, name: "Mark Johnson", role: "Frontend Developer", image: "img/team-3.jpg" },
  { id: 4, name: "Emily Davis", role: "Backend Developer", image: "img/team-4.jpg" },
];

export default function Teacher() {
  return (
    <>
    <Navbar_v1/>
    <div className="container-fluid py-5">
      <div className="container pt-5 pb-3">
        <div className="text-center mb-5">
          <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: "5px" }}>
            Teachers
          </h5>
          <h1>Meet Our Teachers</h1>
        </div>
        <div className="row">
          {teachers.map((teacher) => (
            <div key={teacher.id} className="col-md-6 col-lg-3 text-center team mb-4">
              <div className="team-item rounded overflow-hidden mb-2">
                <div className="team-img position-relative">
                  <img className="img-fluid" src={teacher.image} alt={teacher.name} />
                  <div className="team-social">
                    <a className="btn btn-outline-light btn-square mx-1" href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a className="btn btn-outline-light btn-square mx-1" href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a className="btn btn-outline-light btn-square mx-1" href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
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
    <Footer_v1/>
    </>
  );
}
