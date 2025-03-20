"use client";
import React, { useState, useEffect } from "react";
import Blog from "../Main/blog";
import Testimonial from "../Main/Testimonial";
import Courses from "../Main/Courses";
import Teacher from "../Main/Teacher";
import Category from "../Main/Category";
import About from "../Main/about";
import Carousel from "../Main/Carousel";
import { GetDataResponse } from "@/interface/types";
import Error from "@/components/error/error";
import Loading from "@/components/loading/loading";
import { gql, useQuery } from '@apollo/client';

const GET_DATA = gql`
query {
  events {
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

export default function Main_v1() {
  const { loading, error, data } = useQuery<GetDataResponse>(GET_DATA);
  const [event, Setevent] = useState(null);
  
  useEffect(() => {
    if (data) {
      // Assuming the first event is the one you want to use
      // console.log(data?.events[0]);
      localStorage.setItem('event_id' , data?.events[0]?.id)

      Setevent(data?.events[0]);
    }
  }, [data]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  return (
    <>

      {event && event?.hideGallery == true ? "" :  <Carousel /> }
      {event && event?.hideAboutPage == true ? "" :  <About /> }
      
      {event && event?.hideCourses == true ? "" :  <Courses /> }
      {event && event?.hideTeacherPage == true ? "" :  <Teacher /> }

      {event && event?.hideInfo == true ? "" :  <Testimonial /> }
      {event && event?.hideBlog == true ? "" :  <Blog /> }
      {event && event?.hideCategory == true ? "" :  <Category /> }

    </>
  );
}