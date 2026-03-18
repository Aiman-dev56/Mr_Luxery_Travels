"use client";

import { Images } from "@/app/Assets/Images";
import Image from "next/image";
import React from "react";
import { Typography } from "../common/Typography";
import { ImageComp } from "../common/Images";

export default function TravelSec() {
    return (
        <>
            <section className="container" id="travel">
                <div className="relative overflow-hidden rounded-xl 
                  h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[90vh] 2xl:h-[70vh]">

                    <Image
                        src={Images.ServiceImg}
                        alt="Travel"
                        fill
                        priority
                        className="object-cover object-center"
                    />

                    {/* gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    {/* content */}
                    <div className="absolute bottom-0 left-0 p-5 sm:p-8 lg:p-12 max-w-3xl">
                        <Typography variant="h1">Travel</Typography>

                        <Typography variant="p" className="!text-white mt-3">
                            We provide seamless travel experiences tailored to your needs —
                            offering reliable bookings, curated destinations, and stress-free
                            journeys from start to finish.
                        </Typography>
                    </div>

                </div>
            </section>


            {/* ===== LUXURY HOTEL SECTION ===== */}
            <section className="container mx-auto px-4 mt-14">

                <div className="max-w-2xl">
                    <Typography variant="h2">
                        Luxury Hotels
                    </Typography>

                    <Typography variant="p" className="mt-4">
                        Access the world’s most prestigious hotels with MRLUXURYTRAVELS,
                        from iconic city landmarks to serene coastal resorts. Enjoy
                        exclusive perks such as upgrades, spa treatments, and hotel
                        credits, ensuring every stay feels indulgent, seamless,
                        and unforgettable.
                    </Typography>
                </div>

                <div className="mt-8 overflow-hidden rounded-xl">
                    <ImageComp
                        src={Images.LuxeryImg}
                        className="w-full object-cover h-[140px] sm:h-[200px] md:h-[260px] lg:h-[300px] 2xl:h-[380px]"
                    />
                </div>

            </section>
        </>

    )
}