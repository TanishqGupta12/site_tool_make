import React from "react";

import "./Category.css";
export default function CategoryFooter() {
  const categories = [
    { title: "Popular Category", links: ["WordPress", "Plugins", "Joomla Template", "Admin Template", "HTML Template"] },
    { title: "Our Company", links: ["About Us", "How It Works", "Affiliates", "Testimonials", "Contact Us", "Plan & Pricing", "Blog"] },
    { title: "Help & Support", links: ["Support Forum", "Terms & Conditions", "Support Policy", "Refund Policy", "FAQs", "Buyers FAQ", "Sellers FAQ"] },

  ];

  return (
    <footer className="footer-area footer--light">
      <div className="footer-big">
        <div className="container">
          <div className="row">
            {categories.map((category, index) => (
              <div key={index} className="col-md-3 col-sm-4">
                <div className="footer-widget">
                  <div className="footer-menu">
                    <h4 className="footer-widget-title">{category.title}</h4>
                    <ul>
                      {category.links.map((link, i) => (
                        <li key={i}>
                          <a href="#">{link}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* end /.row */}
        </div>
        {/* end /.container */}
      </div>
    </footer>
  );
}
