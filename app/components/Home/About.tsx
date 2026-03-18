"use client";

import React from "react";
import { Typography } from "../common/Typography";
import { ImageComp } from "../common/Images";
import { Images } from "../../Assets/Images";

export default function About() {
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-10 py-14 lg:py-20">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                {/* TEXT */}
                <div className="lg:col-span-7 max-w-2xl">

                    <Typography variant="h2" className="leading-tight">
                        WELCOME TO MRLUXURYTRAVELS
                    </Typography>

                    <Typography variant="p" className="!text-para mt-5">
                        Celebrating the French Art de Vivre in every detail, each
                        MRLUXURYTRAVELS Maison is a canvas where bold design meets the
                        soul of local craftsmanship. Serene havens unfold in harmony
                        with their surroundings, culinary moments become symphonies
                        of flavour, and well-being is reimagined through exclusive
                        rituals.
                    </Typography>

                    <div className="flex items-center mt-7 gap-3 cursor-pointer group">
                        <Typography variant="h6">
                            Learn More
                        </Typography>

                        <ImageComp
                            src={Images.RightButton}
                            alt="icon"
                            width={32}
                            height={32}
                            className="transition-transform duration-300 group-hover:translate-x-2"
                        />
                    </div>

                </div>

                {/* IMAGES */}
                <div className="lg:col-span-5 relative flex justify-center">

                    {/* Main Image */}
                    <ImageComp
                        src={Images.AboutImage}
                        alt="About Image"
                        className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[420px] xl:w-[460px] rounded-xl shadow-lg"
                    />

                    {/* Floating Top */}
                    <ImageComp
                        src={Images.AboutImage2}
                        alt="About Image"
                        className="absolute w-[90px] sm:w-[110px] lg:w-[130px] top-[20px] right-[10%] lg:right-[-40px] 2xl:right-[40px] " />

                    {/* Floating Bottom */}
                    <ImageComp
                        src={Images.AboutImage3}
                        alt="About Image"
                        className="absolute w-[90px] sm:w-[110px] lg:w-[130px] bottom-[10px] left-[10%] lg:left-[-40px] 2xl:left-[40px]" />

                </div>

            </div>

        </section>
    );
}