"use client";

import React from "react";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import Hero from "../../components/common/Hero";
import BrandSlider from "../../components/common/Logos";
import About from "../../components/Home/About";
import Destinations from "../../components/Home/Destination";
import Services from "../../components/Home/Services";
import NewsSec from "../../components/Home/News";

export default function Home() {
    return (
        <>
            <Hero />
            <BrandSlider />
            <About />
            <Destinations />
            <Services />
            <NewsSec />
            <Footer />
        </>
    )
}