"use client";
import React, { useState, useEffect } from "react";
import './footer_style.css'
import Link from "next/link";

import Error from "@/components/error/error";
import Loading from "@/components/loading/loading";


import { gql, useQuery } from "@apollo/client";

const GET_DATA = gql`
  query EventData($eventId: ID!) {
    event(id: $eventId) {
      id
      name

      description
      startDate
      slug
      latitude
      longitude
      email
      phone
      timeZone
      customCss
      customJs
      termsAndConditions
      paymentNeeded
      publishableKey
      secretKey
      sendRegistrationConfirmationEmailToGuest
      footerText
      PageContent
      galleryText
      hideAboutPage
      hideCategory
      hideCourses
      hideGallery
      hideInfo
      hideTeacherPage
      hideBlog
      address
      categorys {
        id
        content
      }
    }
  }
`;

const Footer_v1 = () => {
  const [eventId, setEventId] = useState(null);
  const [event, setevent] = useState(null);

  useEffect(() => {
    const storedEventId = localStorage.getItem("event_id");
    if (storedEventId) setEventId(storedEventId);
  }, []);

  const { loading, error, data } = useQuery(GET_DATA, {
    variables: { eventId },
    skip: !eventId,
  });

  useEffect(() => {
    setevent(data?.event);
  }, [data?.event]);

  // if (loading) return <Loading />;
  // if (error) return <Error error={error} />;

  return (
    <>

      <div className="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5">
        <div className="row pt-5">
          <div className="col-lg-7 col-md-12">
            <div className="row">
              <div className="col-md-6 mb-5">
                <h5
                  className="text-primary text-uppercase mb-4"
                  style={{ letterSpacing: "5px" }}
                >
                  Get In Touch
                </h5>
                <p>
                  <i className="fa fa-map-marker-alt mr-2"></i>
                  {event?.address}
                </p>
                <p>
                  <i className="fa fa-phone-alt mr-2"></i>
                  {event?.address}
                </p>
                <p>
                  <i className="fa fa-envelope mr-2"></i>
                  {event?.email}
                </p>
                <div className="d-flex justify-content-start mt-4">
                  <a className="btn btn-outline-light btn-square mr-2" href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-outline-light btn-square mr-2" href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-outline-light btn-square mr-2" href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a className="btn btn-outline-light btn-square" href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-6 mb-5">
                <h5
                  className="text-primary text-uppercase mb-4"
                  style={{ letterSpacing: "5px" }}
                >
                  More Link
                </h5>
                <div className="d-flex flex-column justify-content-start more-link">
                  <p>
                    <Link href="/academy/blog" legacyBehavior>
                      <a className="nav-link text-white py-0">Blog</a>
                    </Link>
                  </p>
                  <p>
                    <Link href="/academy/about" legacyBehavior>
                      <a className="nav-link text-white py-0">About</a>
                    </Link>
                  </p>
                  <p>
                    <Link href="/academy/contact" legacyBehavior>
                      <a className="nav-link text-white py-0">Contact</a>
                    </Link>
                  </p>
                  <p>
                    <a
                      className="nav-link text-white py-0"
                      href="/academy/FaqSection"
                    >
                      FAQs
                    </a>
                  </p>
                  <p>
                    <a
                      className="nav-link text-white py-0"
                      href="/academy/termsAndConditions"
                    >
                      Terms
                    </a>
                  </p>
                  <p>
                    <a className="nav-link text-white py-0" href="#">
                      Privacy
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 mb-5">
            <h5
              className="text-primary text-uppercase mb-4"
              style={{ letterSpacing: "5px" }}
            >
              Newsletter
            </h5>
            <p>
              Rebum labore lorem dolores kasd est, et ipsum amet et at kasd,
              ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor
              duo eirmod sea justo no lorem est diam
            </p>
            <div className="w-100">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-light"
                  style={{ padding: "30px" }}
                  placeholder="Your Email Address"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary px-4">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5"
        style={{ borderColor: "rgba(256, 256, 256, .1)" }}
      >
        <div className="row">
          <div className="col-lg-6 ml-2 text-center text-md-right">
            {event?.name}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer_v1;
