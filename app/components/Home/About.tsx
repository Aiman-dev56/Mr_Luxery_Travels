"use client";

import React from "react";
import { Typography } from "../common/Typography";
import { ImageComp } from "../common/Images";
import { Images } from "../../Assets/Images";

export default function About() {
    return (
        <section className="container mx-auto px-6 lg:px-10 py-16">

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Text Section */}
                <div className="lg:col-span-7 lg:pr-10">

                    <Typography variant="h2" className="lg:w-160 md:w-100 w-64 ">
                        WELCOME TO MRLUXURYTRAVELS
                    </Typography>

                    <Typography variant="p" className="!text-para mt-6 lg:w-160 md:w-100 w-64">
                        Celebrating the French Art de Vivre in every detail, each
                        MRLUXURYTRAVELS Maison is a canvas where bold design meets the
                        soul of local craftsmanship. Serene havens unfold in harmony
                        with their surroundings, culinary moments become symphonies
                        of flavour, and well-being is reimagined through exclusive
                        rituals.
                    </Typography>

                    <div className="flex items-center mt-8 gap-3 cursor-pointer">
                        <Typography variant="h6">Learn More</Typography>

                        <ImageComp
                            src={Images.RightButton}
                            alt="icon"
                            width={32}
                            height={32}
                        />
                    </div>

                </div>

                {/* Image Section */}
                <div className="lg:col-span-5 relative flex justify-center items-center">

                    {/* Main Image */}
                    <ImageComp
                        src={Images.AboutImage}
                        alt="About Image"
                        className="w-[280px] sm:w-[340px] lg:w-[420px] xl:w-[450px] rounded-lg"
                    />

                    {/* Top Floating Image */}
                    <ImageComp
                        src={Images.AboutImage2}
                        alt="About Image"
                        className="absolute w-[100px] sm:w-[120px] lg:w-[140px] top-[10px] md:right-[80px] sm:right-[80px] right-[10px] lg:right-[-40px]"
                    />

                    {/* Bottom Floating Image */}
                    <ImageComp
                        src={Images.AboutImage3}
                        alt="About Image"
                        className="absolute w-[100px] sm:w-[120px] lg:w-[140px] bottom-[10px] md:left-[80px] left-[10px] sm:left-[80px] lg:left-[-40px]"
                    />

                </div>

            </div>

        </section>
    );
}