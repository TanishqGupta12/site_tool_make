"use client"

import React, {useState , useEffect} from 'react';
import Navbar_v1 from "@/components/navbar/Navbar_v1";
import Footer_v1 from "@/components/footer/Footer_v1";

import Error from "@/components/error/error";
import Loading from "@/components/loading/loading";

import { gql, useQuery } from '@apollo/client';

const GET_DATA = gql`
  query EventData($eventId: ID!) {
    event(id: $eventId) {
      id
      termsAndConditions
    }
  }
`;


const termsAndConditions = () => {

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

    if (loading) return <Loading />;
    if (error) return <Error error={error} />;

  return (
    <>
    <Navbar_v1/>
    <main className="wrap">
        <section className="container">
          <div className="container__heading">
            <h2>Terms & Conditions</h2>
          </div>
          <div className="container__content">
            <div dangerouslySetInnerHTML={{ __html: event?.termsAndConditions }} />
          </div>
        </section>
      </main>
    <Footer_v1/>
    </>
  );
};

export default termsAndConditions;