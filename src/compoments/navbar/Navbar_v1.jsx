"use client"
import Link from 'next/link'
import React from "react";
import GetDomain  from "../../Hooks/useGetDmain";

export default function Navbar_v1() {
  
  GetDomain(window.location)
  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid d-none d-lg-block">
        <div className="row align-items-center py-4 px-xl-5">
          <div className="col-lg-3">
            <a href="#" className="text-decoration-none">
              <h1 className="m-0">
                <span className="text-primary">E</span>COURSES
              </h1>
            </a>
          </div>
          <div className="col-lg-3 text-right">
            <div className="d-inline-flex align-items-center">
              <i className="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
              <div className="text-left">
                <h6 className="font-weight-semi-bold mb-1">Our Office</h6>
                <small>123 Street, New York, USA</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 text-right">
            <div className="d-inline-flex align-items-center">
              <i className="fa fa-2x fa-envelope text-primary mr-3"></i>
              <div className="text-left">
                <h6 className="font-weight-semi-bold mb-1">Email Us</h6>
                <small>info@example.com</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 text-right">
            <div className="d-inline-flex align-items-center">
              <i className="fa fa-2x fa-phone text-primary mr-3"></i>
              <div className="text-left">
                <h6 className="font-weight-semi-bold mb-1">Call Us</h6>
                <small>+012 345 6789</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <div className="container-fluid">
        <div className="row border-top px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <div  className="d-flex align-items-center justify-content-between bg-secondary w-100 text-decoration-none"  
            style={{ height: "67px", padding: "0 30px" }}>

              <input className="d-flex align-items-center justify-content-between bg-secondary w-100 text-decoration-none" placeholder='sarch..'
              style={{ height: "67px", padding: "0 5px" }}
              />
              <h5 className="text-primary m-0">
                <i className="fa fa-book-open mr-2"></i>
              </h5>
              <i className="fa fa-angle-down text-primary"></i>
           </div>
            <nav
              className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light"
              id="navbar-vertical"
              style={{ width: "calc(100% - 30px)", zIndex: "9" }}
            >
              <div className="navbar-nav w-100">
                <div className="nav-item dropdown">
                  <Link href="#" className="nav-link">
                    Web Design <i className="fa fa-angle-down float-right mt-1"></i>
                  </Link>
                  <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                    <Link href="#" className="dropdown-item">
                      HTML
                    </Link>
                    <Link href="#" className="dropdown-item">
                      CSS
                    </Link>
                    <Link href="#" className="dropdown-item">
                      jQuery
                    </Link>
                  </div>
                </div>
                <Link href="#" className="nav-item nav-link">
                  Apps Design
                </Link>
                <Link href="#" className="nav-item nav-link">
                  Marketing
                </Link>
                <Link href="#" className="nav-item nav-link">
                  Research
                </Link>
                <Link href="#" className="nav-item nav-link">
                  SEO
                </Link>
              </div>
            </nav>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
              <a href="#" className="text-decoration-none d-block d-lg-none">
                <h1 className="m-0">
                  <span className="text-primary">E</span>COURSES
                </h1>
              </a>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav py-0">
                  <Link href="/" className="nav-item nav-link active">
                    Home
                  </Link>
                  <Link href="/academy/about" className="nav-item nav-link">
                    About
                  </Link>
                  <Link href="/academy/course" className="nav-item nav-link">
                    Courses
                  </Link>
                  <Link href="/academy/teacher" className="nav-item nav-link">
                    Teachers
                  </Link>
                  <Link href="/academy/blog" className="nav-link" data-toggle="dropdown">
                    Blog
                  </Link>
                  <Link href="/academy/contact" className="nav-item nav-link">
                    Contact
                  </Link>
                </div>
                <Link className="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block" href="#">
                  Join Now
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
