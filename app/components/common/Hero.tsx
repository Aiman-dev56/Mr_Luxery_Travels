"use client";

import Image from "next/image";
import { Typography } from "./Typography";
import { Images } from "@/app/Assets/Images";



export default function Hero() {
    return (
        <div>
            <section className="w-full flex justify-center mb-12 px-2 sm:px-6 lg:px-4">
                <div className="relative w-full  h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[88vh] 2xl:h-[92vh] overflow-hidden rounded-xl">

                    {/* HERO IMAGE */}
                    <Image
                        src={Images.HeroImage}
                        alt="heroImage"
                        fill
                        priority
                        className="object-cover object-center"
                    />

                    {/* DARK OVERLAY */}
                    <div className="absolute inset-0 bg-black/20" />

                    {/* CONTENT */}
                    <div className="absolute inset-0 flex items-center">
                        <div className="max-w-xl sm:max-w-2xl lg:max-w-9xl 2xl:max-w-[1000px] px-6 sm:px-10 lg:px-16">

                            <Typography variant="subtitle" color="secondary">
                                Find And Book Your Perfect Destination.
                            </Typography>

                            <Typography variant="h1" className="mt-2 ">
                                Plan Your Next Trip
                            </Typography>

                            <Typography variant="p" className="!text-white mt-4 sm:mt-6">
                                Yes, you can try us for free for 30 days. If you want,
                                we’ll provide you with a free, personalized 30-minute
                                onboarding call to get you up and running as soon as possible.
                            </Typography>

                        </div>
                    </div>

                </div>
            </section>


        </div>

    );
}