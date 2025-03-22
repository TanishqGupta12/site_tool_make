"use client";

import React, { useState, useEffect } from 'react';
import Navbar_v1 from "@/components/navbar/Navbar_v1";
import Footer_v1 from "@/components/footer/Footer_v1";

import Error from "@/components/error/error";
import Loading from "@/components/loading/loading";

import { gql, useQuery } from '@apollo/client';
import DOMPurify from 'dompurify';
import { marked } from 'marked'; // Import marked to parse Markdown

const GET_DATA = gql`
  query EventData($eventId: ID!) {
    event(id: $eventId) {
      id
      termsAndConditions
    }
  }
`;

const TermsAndConditions = () => {
  const [eventId, setEventId] = useState(null);
  const [event, setEvent] = useState(null);

  // Get eventId from localStorage on initial render
  useEffect(() => {
    const storedEventId = localStorage.getItem("event_id");
    if (storedEventId) {
      setEventId(storedEventId);
    }
  }, []);

  // Fetch event data using Apollo query
  const { loading, error, data } = useQuery(GET_DATA, {
    variables: { eventId },
    skip: !eventId, // Skip query if eventId is not yet available
  });

  // Update event state once data is available
  useEffect(() => {
    if (data?.event) {
      setEvent(data.event);
    }
  }, [data]);

  // Handle loading and error states
  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  // Parse Markdown to HTML if needed
  const markdownHTML = marked(event?.termsAndConditions || "");

  // Sanitize the HTML content before rendering
  const sanitizedHTML = DOMPurify.sanitize(markdownHTML);

  return (
    <>
      <Navbar_v1 />
      <main className="wrap">
        <section className="container">
          <div className="container__heading">
            <h2>Terms & Conditions</h2>
          </div>
          <div className="container__content">
            {/* Render sanitized HTML */}
            <div dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
          </div>
        </section>
      </main>
      <Footer_v1 />
    </>
  );
};

export default TermsAndConditions;