"use client"
import React from "react";
import Navbar_v1 from "@/compoments/navbar/Navbar_v1";
import Footer_v1 from "@/compoments/footer/Footer_v1";
export default function About() {

  return (
    <>
    <Navbar_v1/>
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="row pb-3">
              {[1, 2, 3, 1, 2, 3].map((num, index) => (
                <div className="col-lg-6 mb-4" key={index}>
                  <div className="blog-item position-relative overflow-hidden rounded mb-2">
                    <img className="img-fluid" src={`/img/blog-${num}.jpg`} alt={`Blog ${num}`} />
                    <a className="blog-overlay text-decoration-none" href="#">
                      <h5 className="text-white mb-3">
                        Lorem elitr magna stet eirmod labore amet labore clita at ut clita
                      </h5>
                      <p className="text-primary m-0">Jan 01, 2050</p>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-4 mt-5 mt-lg-0">
            <div className="d-flex flex-column text-center bg-dark rounded mb-5 py-5 px-4">
              <img src="/img/user.jpg" className="img-fluid rounded-circle mx-auto mb-3" style={{ width: "100px" }} />
              <h3 className="text-primary mb-3">John Doe</h3>
              <h3 className="text-uppercase mb-4" style={{ letterSpacing: "5px" }}>
                Tag Cloud
              </h3>
              <p className="text-white m-0">
                Conset elitr erat vero dolor ipsum et diam, eos dolor lorem, ipsum sit no ut est ipsum erat kasd amet elitr
              </p>
            </div>

            <div className="mb-5">
              <form action="">
                <div className="input-group">
                  <input type="text" className="form-control form-control-lg" placeholder="Keyword" />
                  <div className="input-group-append">
                    <span className="input-group-text bg-transparent text-primary">
                      <i className="fa fa-search"></i>
                    </span>
                  </div>
                </div>
              </form>
            </div>

            <div className="mb-5">
              <h3 className="text-uppercase mb-4" style={{ letterSpacing: "5px" }}>
                Categories
              </h3>
              <ul className="list-group list-group-flush">
                {[
                  { name: "Web Design", count: 150 },
                  { name: "Web Development", count: 131 },
                  { name: "Online Marketing", count: 78 },
                  { name: "Keyword Research", count: 56 },
                  { name: "Email Marketing", count: 98 },
                ].map((category, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between align-items-center px-0">
                    <a href="#" className="text-decoration-none h6 m-0">
                      {category.name}
                    </a>
                    <span className="badge badge-primary badge-pill">{category.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-5">
              <h3 className="text-uppercase mb-4" style={{ letterSpacing: "5px" }}>
                Recent Post
              </h3>
              {[1, 2, 3].map((num, index) => (
                <a key={index} className="d-flex align-items-center text-decoration-none mb-3" href="#">
                  <img className="img-fluid rounded" src="/img/blog-80x80.jpg" alt={`Recent Blog ${num}`} />
                  <div className="pl-3">
                    <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                    <small>Jan 01, 2050</small>
                  </div>
                </a>
              ))}
            </div>

            <div className="mb-5">
              <h3 className="text-uppercase mb-4" style={{ letterSpacing: "5px" }}>
                Tag Cloud
              </h3>
              <div className="d-flex flex-wrap m-n1">
                {["Design", "Development", "Marketing", "SEO", "Writing", "Consulting"].map((tag, index) => (
                  <a key={index} href="#" className="btn btn-outline-primary m-1">
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer_v1/>
    </>
  );
}
