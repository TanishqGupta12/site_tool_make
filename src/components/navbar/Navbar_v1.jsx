"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { gql, useQuery } from "@apollo/client";

import Error from "@/components/error/error";
import Loading from "@/components/loading/loading";


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
    }
  }
`;

export default function Navbar_v1() {
  const { data: session } = useSession();
  const [eventId, setEventId] = useState(null);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const storedEventId = localStorage.getItem("event_id");
    if (storedEventId) setEventId(storedEventId);
  }, []);

  const { loading, error, data } = useQuery(GET_DATA, {
    variables: { eventId },
    skip: !eventId,
  });

  useEffect(() => {
    if (data?.event) {
      setEvent(data.event);
    }
  }, [data]);

  const handleLogout = async () => {
    await signOut();
  };

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid d-none d-lg-block">
        <div className="row align-items-center py-4 px-xl-5">
          <div className="col-lg-3">
            <Link href="/" className="text-decoration-none">
              <h1 className="m-0">
                <span className="text-primary">{event?.name?.charAt(0) || ''}</span>
                {event?.name?.replace('E', '') || ''}
              </h1>
            </Link>
          </div>
          <div className="col-lg-3 text-right">
            <div className="d-inline-flex align-items-center">
              <i className="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
              <div className="text-left">
                <h6 className="font-weight-semi-bold mb-1">Our Office</h6>
                <small>{event?.address || 'N/A'}</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 text-right">
            <div className="d-inline-flex align-items-center">
              <i className="fa fa-2x fa-envelope text-primary mr-3"></i>
              <div className="text-left">
                <h6 className="font-weight-semi-bold mb-1">Email Us</h6>
                <small>{event?.email || 'N/A'}</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 text-right">
            <div className="d-inline-flex align-items-center">
              <i className="fa fa-2x fa-phone text-primary mr-3"></i>
              <div className="text-left">
                <h6 className="font-weight-semi-bold mb-1">Call Us</h6>
                <small>{event?.phone || 'N/A'}</small>
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
            <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-0">
              <div className="d-flex align-items-center justify-content-center w-100">
                <div className="navbar-nav mx-auto">
                  <Link href="/" className="nav-item nav-link active">
                    Home
                  </Link>
                  <Link href="/academy/course" className="nav-item nav-link">
                    Courses
                  </Link>
                  <Link href="/academy/teacher" className="nav-item nav-link">
                    Teachers
                  </Link>

                  {session ? (
                    <>

                    <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                        <ul className="navbar-nav">
                          <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Dropdown
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                              <li><a className="dropdown-item" href="#">Action</a></li>
                              <li><a className="dropdown-item" href="#">Another action</a></li>
                              <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>

                    </>
                  ) : (
                    <Link href="/signup" className="nav-item nav-link ml-5">
                      Signup
                    </Link>
                  )}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}