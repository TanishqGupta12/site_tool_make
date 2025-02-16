import React from 'react';
import Header_v1 from "@/components/Header/Header_v1";

export default function Course() {
  return (
    <>
      <Header_v1 />

      {/* Category Start */}
      <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
          <div className="text-center mb-5">
            <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: "5px" }}>
              Subjects
            </h5>
            <h1>Explore Top Subjects</h1>
          </div>
          <div className="row">
            {[
              { img: "/img/cat-1.jpg", title: "Web Design" },
              { img: "/img/cat-2.jpg", title: "Development" },
              { img: "/img/cat-3.jpg", title: "Game Design" },
              { img: "/img/cat-4.jpg", title: "Apps Design" },
              { img: "/img/cat-5.jpg", title: "Marketing" },
              { img: "/img/cat-6.jpg", title: "Research" },
              { img: "/img/cat-7.jpg", title: "Content Writing" },
              { img: "/img/cat-8.jpg", title: "SEO" },
            ].map((item, index) => (
              <div className="col-lg-3 col-md-6 mb-4" key={index}>
                <div className="cat-item position-relative overflow-hidden rounded mb-2">
                  <img className="img-fluid" src={item.img} alt={item.title} />
                  <a className="cat-overlay text-white text-decoration-none" href="">
                    <h4 className="text-white font-weight-medium">{item.title}</h4>
                    <span>100 Courses</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Courses Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: "5px" }}>
              Courses
            </h5>
            <h1>Our Popular Courses</h1>
          </div>
          <div className="row">
            {[
              { img: "/img/course-1.jpg", title: "Web Design & Development", price: "$99" },
              { img: "/img/course-2.jpg", title: "Frontend Development", price: "$129" },
              { img: "/img/course-3.jpg", title: "SEO & Digital Marketing", price: "$79" },
              { img: "/img/course-4.jpg", title: "Graphic Design Masterclass", price: "$89" },
              { img: "/img/course-5.jpg", title: "Python for Beginners", price: "$109" },
              { img: "/img/course-6.jpg", title: "React.js & Next.js", price: "$119" },
            ].map((course, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <div className="rounded overflow-hidden mb-2">
                  <img className="img-fluid" src={course.img} alt={course.title} />
                  <div className="bg-secondary p-4">
                    <div className="d-flex justify-content-between mb-3">
                      <small><i className="fa fa-users text-primary mr-2"></i>25 Students</small>
                      <small><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                    </div>
                    <a className="h5" href="">{course.title}</a>
                    <div className="border-top mt-4 pt-4 d-flex justify-content-between">
                      <h6><i className="fa fa-star text-primary mr-2"></i>4.5 <small>(250)</small></h6>
                      <h5>{course.price}</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
