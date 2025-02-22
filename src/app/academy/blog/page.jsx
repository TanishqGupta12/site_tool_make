import React from "react";
import Navbar_v1 from "@/components/navbar/Navbar_v1";
import Footer_v1 from "@/components/footer/Footer_v1";
function Blog() {
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
                      <a className="blog-overlay text-decoration-none" href="">
                        <h5 className="text-white mb-3">
                          Lorem elitr magna stet eirmod labore amet labore clita at ut clita
                        </h5>
                        <p className="text-primary m-0">Jan 01, 2050</p>
                      </a>
                    </div>
                  </div>
                ))}
                <div className="col-12">
                  <nav aria-label="Page navigation">
                    <ul className="pagination pagination-lg justify-content-center mb-0">
                      <li className="page-item disabled">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                          <span className="sr-only">Previous</span>
                        </a>
                      </li>
                      {[1, 2, 3].map((num) => (
                        <li className="page-item" key={num}>
                          <a className="page-link" href="#">{num}</a>
                        </li>
                      ))}
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                          <span className="sr-only">Next</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            {/* Sidebar Section */}
            <div className="col-lg-4 mt-5 mt-lg-0">
              <div className="d-flex flex-column text-center bg-dark rounded mb-5 py-5 px-4">
                <img src="/img/user.jpg" className="img-fluid rounded-circle mx-auto mb-3" style={{ width: "100px" }} />
                <h3 className="text-primary mb-3">John Doe</h3>
                <p className="text-white m-0">
                  Conset elitr erat vero dolor ipsum et diam, eos dolor lorem, ipsum sit no ut est ipsum erat kasd amet elitr
                </p>
              </div>

              {/* Search Form */}
              <div className="mb-5">
                <form action="">
                  <div className="input-group">
                    <input type="text" className="form-control form-control-lg" placeholder="Keyword" />
                    <button className="input-group-text bg-transparent text-primary">
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </form>
              </div>

              {/* Categories List */}
              <div className="mb-5">
                <h3 className="text-uppercase mb-4" style={{ letterSpacing: "5px" }}>Categories</h3>
                <ul className="list-group list-group-flush">
                  {[
                    { name: "Web Design", count: 150 },
                    { name: "Web Development", count: 131 },
                    { name: "Online Marketing", count: 78 },
                    { name: "Keyword Research", count: 56 },
                    { name: "Email Marketing", count: 98 },
                  ].map((category, index) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0" key={index}>
                      <a href="" className="text-decoration-none h6 m-0">{category.name}</a>
                      <span className="badge bg-primary">{category.count}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Posts */}
              <div className="mb-5">
                <h3 className="text-uppercase mb-4" style={{ letterSpacing: "5px" }}>Recent Post</h3>
                {[1, 2, 3].map((_, index) => (
                  <a className="d-flex align-items-center text-decoration-none mb-3" href="" key={index}>
                    <img className="img-fluid rounded" src="/img/blog-80x80.jpg" alt="Recent Post" />
                    <div className="pl-3">
                      <h6 className="m-1">Diam lorem dolore justo eirmod lorem dolore</h6>
                      <small>Jan 01, 2050</small>
                    </div>
                  </a>
                ))}
              </div>

              {/* Tag Cloud */}
              <div className="mb-5">
                <h3 className="text-uppercase mb-4" style={{ letterSpacing: "5px" }}>Tag Cloud</h3>
                <div className="d-flex flex-wrap m-n1">
                  {["Design", "Development", "Marketing", "SEO", "Writing", "Consulting"].map((tag, index) => (
                    <a href="" className="btn btn-outline-primary m-1" key={index}>{tag}</a>
                  ))}
                </div>
              </div>
            </div>
            {/* End Sidebar Section */}
          </div>
        </div>
      </div>
      <Footer_v1/>
    </>
  );
}

export default Blog;
