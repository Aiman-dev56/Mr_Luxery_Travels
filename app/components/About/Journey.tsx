"use client";

import { Images } from "@/app/Assets/Images";
import React from "react";
import { ImageComp } from "../common/Images";
import { Typography } from "../common/Typography";

export default function Journey() {
    return (
        <>
            <section className="container mx-auto px-4 ">
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-28 gap-10 ">
                    <div className="flex flex-col lg:mt-10 mt-4">
                        <Typography variant="h2" className="w-120">A Journey <br />That Began <br /> With Curiosity</Typography>
                        <Typography variant="p" className="lg:mt-6 mt-2">Danny’s passion for travel began at a young age. Growing up, his earliest memories of adventure were watching aeroplanes cross the sky while his grandmother would say, “There goes your father in the aeroplane.” Travel in those days meant long, arduous journeys by beautifully decorated buses through mountain villages — experiences that planted the seed for a lifelong fascination with the world beyond the horizon.</Typography>
                        <Typography variant="p" className="lg:mt-6 mt-2">In 1992, while sitting on a rock in Hawaii, Danny made a life-changing decision: travel would not just be a passion, but his profession. That moment sparked a journey that continues to this day.</Typography>
                        <Typography variant="p" className="lg:mt-6 mt-2">At just 22, Danny embarked on his first major trip around the world — flying from London through Asia, Australia, New Zealand, the Pacific Islands, Hawaii, the United States, and back home. From that moment on, he was truly “bitten by the travel bug.”.</Typography>


                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-2 gap-4 ">
                        <div className="2xl:mt-30 lg:mt-24 lg:ml-10 " >
                            <ImageComp
                                src={Images.AboutImg3}
                                className="rounded-lg 2xl:w-[405px] 2xl:h-[600px] lg:h-[340px] lg:w-[240px]"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <ImageComp
                                src={Images.AboutImg4}
                                className="rounded-lg 2xl:w-[405px] 2xl:h-[405px] lg:w-[280px] lg:h-[280px]"
                            />
                            <ImageComp
                                src={Images.AboutImg5}
                                className="rounded-lg 2xl:w-[405px] 2xl:h-[405px] lg:w-[280px] lg:h-[280px]"
                            />

                        </div>


                    </div>

                </div>

            </section>
        </>
    )
}