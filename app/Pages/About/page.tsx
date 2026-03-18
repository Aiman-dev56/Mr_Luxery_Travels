"use client";

import Footer from "../../components/Layout/Footer";
import Founder from "@/app/components/About/Founder";
import Journey from "@/app/components/About/Journey";
import Philosphy from "@/app/components/About/Philosphy";
import Expectations from "@/app/components/About/Expectation";

export default function AboutPage() {
    return (
        <div >
            <Founder />
            <Journey />
            <Philosphy />
            <Expectations />
            <Footer />
        </div >
    )
}