"use client"
import Link from 'next/link'
import React, { useState, useEffect } from "react";


import { useSession, signOut } from "next-auth/react"


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
      address
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

  // if (loading) return <Loading />;
  // if (error) return <Error error={error} />;

  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid d-none d-lg-block">
        <div className="row align-items-center py-4 px-xl-5">
          <div className="col-lg-3">
            <Link href="/" className="text-decoration-none">
              <h1 className="m-0">
                <span className="text-primary">{event?.name.charAt(0)}</span>{event?.name.replace('E', '')}
              </h1>
            </Link>
          </div>
          <div className="col-lg-3 text-right">
            <div className="d-inline-flex align-items-center">
              <i className="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
              <div className="text-left">
                <h6 className="font-weight-semi-bold mb-1">Our Office</h6>
                <small>{event?.address}</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 text-right">
            <div className="d-inline-flex align-items-center">
              <i className="fa fa-2x fa-envelope text-primary mr-3"></i>
              <div className="text-left">
                <h6 className="font-weight-semi-bold mb-1">Email Us</h6>
                <small>{event?.email}/</small>
              </div>
            </div>
          </div>
          <div className="col-lg-3 text-right">
            <div className="d-inline-flex align-items-center">
              <i className="fa fa-2x fa-phone text-primary mr-3"></i>
              <div className="text-left">
                <h6 className="font-weight-semi-bold mb-1">Call Us</h6>
                <small>{event?.phone}</small>
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
              {/* Navbar Items */}
              <div className="d-flex align-items-center justify-content-center w-100">
                <div className="navbar-nav mx-auto">
                  <Link href="/" legacyBehavior>
                    <a className="nav-item nav-link active">Home</a>
                  </Link>

                  {/* Other Navbar Items */}

                  <Link href="/academy/course" legacyBehavior>
                    <a className="nav-item nav-link">Courses</a>
                  </Link>
                  <Link href="/academy/teacher" legacyBehavior>
                    <a className="nav-item nav-link">Teachers</a>
                  </Link>

                  {session.data ? (
                  <>
                    <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown hover <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                    </svg>
                    </button>
                    <div id="dropdownHover" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                          <li>
                            <Link href="#" legacyBehavior>
                              <a href="#" onClick={handleLogout} class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                Logout
                              </a>
                            </Link>

                          </li>
                          <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                          </li>
                          <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                          </li>
                          <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                          </li>
                        </ul>
                    </div>
                      
                  </>
                  ) : (
                    <Link href="/signup" legacyBehavior>
                      <a className="nav-item nav-link ml-5">Signup</a>
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
