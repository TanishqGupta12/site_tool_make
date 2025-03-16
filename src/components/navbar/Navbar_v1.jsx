"use client"
import Link from 'next/link'
import React  , { useState , useEffect} from "react";


import { useSession , signOut } from "next-auth/react"


import Error from "@/components/error/error";
import Loading from "@/components/loading/loading";

import { gql, useQuery } from '@apollo/client';

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

    }
  }
`;

export default function Navbar_v1() {
  
  const session = useSession();

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
        setevent(data?.event)
    }, [data?.event]);

  const handleLogout = async () => {
    // Call the signOut function
    await signOut();
  };

  console.log(event);
  

  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid d-none d-lg-block">
        <div className="row align-items-center py-4 px-xl-5">
          <div className="col-lg-3">
            <Link href="/" className="text-decoration-none">
              <h1 className="m-0">
                <span className="text-primary">E</span>COURSES
              </h1>
            </Link>
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

          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
              {/* Mobile Brand */}
              <Link href="/" className="text-decoration-none d-block d-lg-none">
                <h1 className="m-0">
                  <span className="text-primary">E</span>COURSES
                </h1>
              </Link>


              {/* Navbar Items */}
              <div className="d-flex  align-items-center justify-content-center">
                <div className="navbar-nav ">
                  <div className="navbar-nav py-0">
                    <Link href="/" legacyBehavior>
                      <a className="nav-item nav-link active">Home</a>
                    </Link>
                    <Link href="/academy/about" legacyBehavior>
                      <a className="nav-item nav-link">About</a>
                    </Link>
                    <Link href="/academy/course" legacyBehavior>
                      <a className="nav-item nav-link">Courses</a>
                    </Link>
                    <Link href="/academy/teacher" legacyBehavior>
                      <a className="nav-item nav-link">Teachers</a>
                    </Link>

                    <Link href="/academy/blog" legacyBehavior>
                      <a className="nav-item nav-link">blog</a>
                    </Link>

                    <Link href="/academy/contact" legacyBehavior>
                      <a className="nav-item nav-link">Contact</a>
                    </Link>

                    {session.data ? (
                      <Link href="#" legacyBehavior>
                        <a className="nav-item nav-link ml-5" onClick={handleLogout}>
                          Logout
                        </a>
                      </Link>
                    ) : (
                      <Link href="/signup" legacyBehavior>
                        <a className="nav-item nav-link ml-5">Signup</a>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
