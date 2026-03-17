"use client";

import FormSec from "@/app/components/Contact/FormSec";
import InfoSec from "@/app/components/Contact/Infosec";
import Footer from "@/app/components/Layout/Footer";
import React from "react";

export default function ContactPage() {
    return (
        <>
            <InfoSec />
            <FormSec />
            <Footer />
        </>
    )
}