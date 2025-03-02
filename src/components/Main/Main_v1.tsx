"use client"
import React  , { useState , useEffect} from "react";

import Blog from "../Main/blog";
import Testimonial from "../Main/Testimonial";

import Courses from "../Main/Courses";
import Teacher from "../Main/Teacher";

import Category from "../Main/Category";

import About from "../Main/about";

import Carousel from "../Main/Carousel";
import {GetDataResponse} from "@/interface/types";

import { gql, useQuery } from '@apollo/client';

const GET_DATA = gql`
query {
  domain(id: 5) {
    events {
      id
      name
      domainId
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
  roles {
    id
    name
  }
}
`;

export default function Main_v1() {

  const { loading, error, data } = useQuery<GetDataResponse>(GET_DATA);
  const [event , Setevent] = useState()

    useEffect(() => {
      Setevent(data?.domain?.events[0])
      localStorage.setItem("event_id" ,data?.domain?.events[0]?.id)
    },[data?.domain]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fkc: {error.message}</p>;
  if (!data || !data?.domain) return <p>No data available </p>;

  return (
    <>

      {event && event?.hideGallery == true ? "" :  <Carousel /> }
      {event && event?.hideAboutPage == true ? "" :  <About /> }
      
      {event && event?.hideCategory == true ? "" :  <Category /> }
      {event && event?.hideCourses == true ? "" :  <Courses /> }
      {event && event?.hideTeacherPage == true ? "" :  <Teacher /> }

      {event && event?.hideInfo == true ? "" :  <Testimonial /> }
      {event && event?.hideBlog == true ? "" :  <Blog /> }

      <main className="wrap">
        <section className="container">
          <div className="container__heading">
            <h2>Terms & Conditions</h2>
          </div>
          <div className="container__content">
            <p>
              {event && event?.termsAndConditions}
            </p>

          </div>
        </section>
      </main>
    </>
  );
}