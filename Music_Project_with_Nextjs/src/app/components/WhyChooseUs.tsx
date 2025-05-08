"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
const musicSchoolContent = [
  {
    title: "Experienced Instructors",
    description: "Our team consists of skilled, experienced instructors who are passionate about teaching and dedicated to helping you excel in your musical journey."
  },
  {
    title: "Flexible Learning Programs",
    description: "We offer a variety of flexible programs for all ages and skill levels, ensuring you can learn at your own pace and fit lessons into your schedule."
  },
  {
    title: "State-of-the-Art Facilities",
    description: "Our music school is equipped with high-quality instruments and modern facilities to provide the best learning experience possible."
  },
  {
    title: "Performance Opportunities",
    description: "Gain real-world experience and build confidence through regular student recitals, showcases, and other performance opportunities."
  }
];


function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={musicSchoolContent}/>
    </div>
  )
}

export default WhyChooseUs