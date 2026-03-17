"use client";

import { Images } from "@/app/Assets/Images";
import { ImageComp } from "@/app/components/common/Images";
import { Typography } from "@/app/components/common/Typography";
import Footer from "@/app/components/Layout/Footer";
import Adventures from "@/app/components/Services/Adventures";
import Destination from "@/app/components/Services/Destination";
import PrivateIsland from "@/app/components/Services/Private";
import SkiandSnow from "@/app/components/Services/SkiandSnow";
import VillasSec from "@/app/components/Services/villassec";
import Image from "next/image";
import React from "react";

export default function ServicesPage() {
    return (
        <>
            <section className="container">
                <div className="relative overflow-hidden rounded-lg h-[510px] 2xl:w-[1960px] 2xl:h-[1080px]  lg:h-[700px]">
                    <Image
                        src={Images.ServiceImg}
                        alt="Travel"
                        fill
                        className="object-cover "
                    />

                    <div
                        className="absolute inset-0"
                        style={{
                            background:
                                "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 40%, transparent 100%)"
                        }}
                    />

                    <div className="absolute bottom-0 left-0 p-8 text-white">
                        <Typography variant="h1">Travel</Typography>
                        <Typography variant="p" className="!text-white w-140 2xl:w-[917px] lg:w-[700px]">
                            We provide seamless travel experiences tailored to your needs—offering reliable bookings, curated destinations, and stress-free journeys from start to finish.
                        </Typography>
                    </div>
                </div>

            </section>

            <section className="container">
                <div className="flex flex-col w-full mt-10" >
                    <Typography variant="h2" className="w-40 ml-8">Luxury Hotels</Typography>
                    <Typography variant="p" className="w-160 ml-8 mt-4 mb-8">Access the world’s most prestigious hotels with MRLUXURYTRAVELS, from iconic city landmarks to serene coastal resorts. Enjoy exclusive perks such as upgrades, spa treatments, and hotel credits, ensuring every stay feels indulgent, seamless, and unforgettable.</Typography>

                </div>
                <ImageComp
                    src={Images.LuxeryImg}
                    className="w-full object-cover h-[400px] 2xl:w-[1960px] 2xl:h-[400px]  lg:h-[300px] rounded-lg"
                />

            </section>

            <VillasSec />
            <SkiandSnow />
            <Adventures />
            <PrivateIsland />
            <Destination />
            <Footer />
        </>
    )

}