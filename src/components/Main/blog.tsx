import React from "react";

const blogPosts = [
    { id: 1, img: "img/blog-1.jpg", title: "Lorem elitr magna stet eirmod labore amet labore clita at ut clita", date: "Jan 01, 2050" },
    { id: 2, img: "img/blog-2.jpg", title: "Lorem elitr magna stet eirmod labore amet labore clita at ut clita", date: "Jan 01, 2050" },
    { id: 3, img: "img/blog-3.jpg", title: "Lorem elitr magna stet eirmod labore amet labore clita at ut clita", date: "Jan 01, 2050" },
];

export default function Blog() {
    return (
        <div className="container-fluid py-5">
            <div className="container pt-5 pb-3">
                <div className="text-center mb-5">
                    <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: "5px" }}>Our Blog</h5>
                    <h1>Latest From Our Blog</h1>
                </div>
                <div className="row pb-3">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="col-lg-4 mb-4">
                            <div className="blog-item position-relative overflow-hidden rounded mb-2">
                                <img className="img-fluid" src={post.img} alt={`Blog post ${post.id}`} />
                                <a className="blog-overlay text-decoration-none" href="">
                                    <h5 className="text-white mb-3">{post.title}</h5>
                                    <p className="text-primary m-0">{post.date}</p>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
