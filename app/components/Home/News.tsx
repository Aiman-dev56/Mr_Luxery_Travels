"use client";
import React from "react";
import { Typography } from "../common/Typography";
import { ImageComp } from "../common/Images";
import { Images } from "@/app/Assets/Images";
import Image from "next/image";

export default function NewsSec() {
    return (
        <section className="container  ">
            <div className="2xl:w-[940px] lg:w-[800px] md:w-[600px] w-[400px] m-8 mt-20">
                <Typography variant="h2"> Latest News</Typography>
                <Typography variant="p">For stories, seasonal moments, and a glimpse into the world of MRLUXURYTRAVELSfollow @MRLUXURYTRAVELS on Instagram.</Typography>
            </div>
            <div className="m-6">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-2 gap-1 ">
                    <div className="flex flex-col">
                        <div className="2xl:w-[400px] 2xl:h-[320px] lg:w-[300px] lg:h-[200px] md:w-[250px] md:h-[170px] sm:w-[200px] ">
                            <ImageComp src={Images.NewsImg}
                                className="object-cover 2xl:w-[400px] 2xl:h-[300px] lg:w-[280px] lg:h-[190px] md:w-[250px] md:h-[170px] sm:w-[200px] rounded-lg " />
                        </div>
                        <div className="mt-2 md:w-[250px] md:h-[170px] sm:w-[200px]">
                            <Typography variant="p">Paris</Typography>
                            <Typography variant="h6">The galette des rois of MrluxuryTravel Paris</Typography> <Typography variant="p">26 December 2025</Typography>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="2xl:w-[400px] 2xl:h-[320px] lg:w-[300px] lg:h-[200px] md:w-[250px] md:h-[170px] sm:w-[200px] ">
                            <ImageComp src={Images.NewsImg2}
                                className="object-cover 2xl:w-[400px] 2xl:h-[300px] lg:w-[280px] lg:h-[190px] md:w-[250px] md:h-[170px] sm:w-[200px] w-[180px] rounded-lg" />
                        </div>
                        <div className="mt-2 md:w-[250px] md:h-[170px] sm:w-[200px]">
                            <Typography variant="p">St-Barth</Typography>
                            <Typography variant="h6">The galette des rois of MrluxuryTravel Paris</Typography>
                            <Typography variant="p">18 December 2025</Typography>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="2xl:w-[400px] 2xl:h-[320px] lg:w-[300px] lg:h-[200px] md:w-[250px] md:h-[170px] sm:w-[200px]">
                            <ImageComp src={Images.NewsImg3}
                                className="object-cover 2xl:w-[400px] 2xl:h-[300px] lg:w-[280px] lg:h-[190px] md:w-[250px] md:h-[170px] sm:w-[200px] rounded-lg" />
                        </div>
                        <div className="mt-2 md:w-[250px] md:h-[170px] sm:w-[200px]">
                            <Typography variant="p">Courchevel</Typography>
                            <Typography variant="h6">The galette des rois of MrluxuryTravel Paris</Typography> <Typography variant="p">11 December 2025</Typography>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="2xl:w-[400px] 2xl:h-[320px] lg:w-[300px] lg:h-[200px] md:w-[250px] md:h-[170px] sm:w-[200px]">
                            <ImageComp src={Images.NewsImg4}
                                className="object-cover 2xl:w-[400px] 2xl:h-[300px] lg:w-[280px] lg:h-[190px] md:w-[250px] md:h-[170px] sm:w-[200px] sm:h-[120px] w-[180px] h-[112px] rounded-lg" />
                        </div>
                        <div className="mt-2 md:w-[250px] md:h-[170px] sm:w-[200px]">
                            <Typography variant="p">Randheli</Typography>
                            <Typography variant="h6">The galette des rois of MrluxuryTravel Paris</Typography>
                            <Typography variant="p">3 December 2025</Typography>
                        </div>
                    </div>
                </div>
            </div>
        </section>)
}