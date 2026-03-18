"use client";

import React from "react";
import { Typography } from "../common/Typography";
import { ImageComp } from "../common/Images";
import { Images } from "@/app/Assets/Images";

export default function Expectations() {
    return (
        <>
            <section className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 lg:mt-10 mt-4 ">
                    <div className="flex flex-col lg:mt-20 mt-10">
                        <Typography variant="h2" className="lg:w-120  w-80 ">Travel Beyond Your Expectations</Typography>

                        <Typography variant="p" className="mt-6">Today, Danny continues to travel extensively, sharing his insights, experiences, and expertise with a global audience through Instagram and TikTok, inspiring thousands with breathtaking destinations, insider tips, and luxury travel guidance. </Typography>
                        <Typography variant="p" className="mt-6">With his extensive industry relationships, purchasing power, and unwavering commitment to excellence, Danny confidently delivers travel experiences that go beyond expectations — both in quality and value.</Typography>
                        <Typography variant="p" className="mt-6">If you are seeking a travel expert who genuinely goes above and beyond, Danny Akhtar is the trusted name in luxury travel.</Typography>
                        <Typography variant="p" className="lg:mt-18 mt-4 !font-semibold">Experience Travel Beyond Your Expectations.</Typography>
                        <Typography variant="p" className="italic">Danny Akhtar, Managing Director</Typography>
                    </div>
                    <div>
                        <ImageComp
                            src={Images.AboutImg9}
                            className="rounded-lg 2xl:w-[840px] lg:w-[640px] 2xl:h-[840px] lg:h-[640px]"
                        />
                    </div>

                </div>

            </section>
        </>
    )
}