"use client";

import TravelSec from "@/app/components/Services/travel";
import Footer from "@/app/components/Layout/Footer";
import Adventures from "@/app/components/Services/Adventures";
import Destination from "@/app/components/Services/Destination";
import PrivateIsland from "@/app/components/Services/Private";
import SkiandSnow from "@/app/components/Services/SkiandSnow";
import VillasSec from "@/app/components/Services/villassec";


export default function ServicesPage() {
    return (
        <>

            <TravelSec />
            <VillasSec />
            <SkiandSnow />
            <Adventures />
            <PrivateIsland />
            <Destination />
            <Footer />
        </>
    )

}