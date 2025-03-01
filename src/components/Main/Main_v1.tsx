"use client"
import React from "react";

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
    id
    domain_name
    subdomain_name
    host
    description
    logo_file_name
    logo_meta
    custom_font_name
    createdAt
    updatedAt

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
      hideBlog
      PageContent
      galleryText
      hideAboutPage
      hideCategory
      hideCourses
      hideGallery
      hideInfo
      hideTeacherPage
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fkc: {error.message}</p>;
  if (!data || !data?.domain) return <p>No data available </p>;

  return (
    <>
      {console.log(data?.domain)}
      <Carousel />
      <About />
      <Category />
      <Courses />
      <Teacher />
      <Testimonial />
      <Blog />
    </>
  );
}