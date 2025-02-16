import React from "react";
import Head from "next/head";

export default function CustomHead() {
  return (
    <Head>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
      />

      {/* Owl Carousel */}
      <link
        rel="stylesheet"
        href="/lib/owlcarousel/assets/owl.carousel.min.css"
      />
    </Head>
  );
}
