"use client";

import React from "react";
import { ImageComp } from "../common/Images";
import { Images } from "@/app/Assets/Images";
import { Typography } from "../common/Typography";


export default function SkiandSnow() {
    return (
        <>
            <section className="container mx-auto px-4 lg:mt-14 " id="skiandsnow">
                <div className="lg:mt-20 mt-10">
                    <ImageComp
                        src={Images.SkiImg}
                        className="w-full object-cover  2xl:w-[1960px] 2xl:h-[400px] lg:h-[300px] md:h-[250px] sm:h-[180px] h-[150px] rounded-lg"
                    />

                </div>

                <div className="flex flex-col max-w-2xl lg:mt-10 mt-6">
                    <Typography variant="h2" className="w-60">Ski & Snow</Typography>
                    <Typography variant="p" className="mt-4 lg:w-140 w-70"> From glamorous Alpine chalets to remote igloo stays, our ski and snow escapes combine adventure with indulgence. Think private instructors, luxury après-ski, and magical winter landscapes tailoredfor every level of skier.</Typography>

                </div>

            </section>
        </>
    )
}