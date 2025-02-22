import React from "react";

import Blog from "../Main/blog";
import Testimonial from "../Main/Testimonial";

import Courses from "../Main/Courses";
import Teacher from "../Main/Teacher";

import Category from "../Main/Category";

import About from "../Main/about";

import Carousel from "../Main/Carousel";

export default function Main_v1() {
    return (
        <>
            <Carousel/>
            <About/>
            <Category/>
            <Courses/>
            <Teacher/>
            <Testimonial/>
            <Blog/>
        </>
    );
}